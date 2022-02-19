const app = require("./index");
const db = require("./modeli/db")
const { assert } = require('chai');
let chai = require('chai');
let chaiHttp = require("chai-http");
const { expect } = chai;

chai.assert;

chai.use(chaiHttp);

describe("Testovi spirale 3", () => {
    describe("Testovi za POST/VJEZBE",() => {
        it("Test 1 za POST", (done) => {
            chai
                .request("http://localhost:3000")
                .post("/vjezbe")
                .send({brojVjezbi:2,brojZadataka:[1,2]})
                .end((err,data) => {
                    expect(data.body.status).to.equals("Kreirane vježbe");
                    done();
                })
        })
        it("Test 2 za POST/VJEZBE",(done) => {
            chai
                .request("http://localhost:3000")
                .post("/vjezbe")
                .send({brojVjezbi:3,brojZadataka:[1,2]})
                .end((err,d) => {
                    expect(d.body.data).to.equals("Pogrešan parametar brojZadataka");
                    done();
                })
        })
    })
    describe("Testovi za GET/VJEZBE",() => {
        it("Test 1 za GET",(done) => {
            chai
                .request("http://localhost:3000")
                .get("/vjezbe")
                .end((err,d) => {
                    expect(JSON.stringify(d.body)).to.equals(JSON.stringify({brojVjezbi:2,brojZadataka:[1,2]}));
                    done();
                })
        })
    })
})

describe("Testovi za sve rute", () => {
    before((done) => {
        db.sequelize.sync({
            force: true
        }).then(() => {
            console.log("Gotovo kreiranje tabela i ubacivanje pocetnih podataka!");
            done();
        });
    })

    after((done) => {
        db.sequelize.sync({
            force: true
        }).then(() => {
            console.log("Gotovo kreiranje tabela i ubacivanje pocetnih podataka!");
            done();
        });
    })

    it("Ispravno dodavanje studenta", (done) => {
        
        const objekt = {
            ime: "Ahmedin",
            prezime: "Hasanovic",
            index: "18646",
            grupa: "Grupa1"
        }
        chai
            .request("http://localhost:3000")
            .post("/student")
            .send(objekt)
            .end((err,d) => {
                expect(d.body.status).to.equals("Kreiran student");
                done();
            })
        
    })
    it("Neispravno dodavanje studenta", (done) => {
        const objekt = {
            ime: "Irfan",
            prezime: "Prazina",
            index: "18646",
            grupa: "Grupa1"
        }
        chai
            .request("http://localhost:3000")
            .post("/student")
            .send(objekt)
            .end((err,d) => {
                expect(d.body.status).to.equals("Student sa indexom " + objekt.index + " već postoji!")
                done();
            })

    })
    it("Ispravno dodavanje studenta 2", (done) => {
        const objekt = {
            ime: "Ispravan",
            prezime: "Student",
            index: "10000",
            grupa: "Grupa1"
        }
        chai
            .request("http://localhost:3000")
            .post("/student")
            .send(objekt)
            .end((err,d) => {
                expect(d.body.status).to.equals("Kreiran student");
                done();
            })
    })
    it("Ispravno dodavanje studenta 3", (done) => {
        const objekt = {
            ime: "Ispravan",
            prezime: "Student",
            index: "11000",
            grupa: "Grupa2"
        }
        chai
            .request("http://localhost:3000")
            .post("/student")
            .send(objekt)
            .end((err,d) => {
                expect(d.body.status).to.equals("Kreiran student");
                done();
            })
    })
    it("Provjera koliko studenata ima u bazi", (done) => {
        db.student.findAll().then((studenti) => {
            expect(studenti.length).to.equals(3);
            done();
        })
    })

    it("Provjera koliko grupa ima u bazi", (done) => {
        db.grupa.findAll().then((studenti) => {
            expect(studenti.length).to.equals(2);
            done();
        })
    })

    it("Provjera promjene grupe za prvog studenta", (done) => {
        const objekt = {
            grupa: "Grupa3"
        }
        chai
            .request("http://localhost:3000")
            .put("/student/18646")
            .send(objekt)
            .end((err,d) => {
                expect(d.body.status).to.equals("Promijenjena grupa studentu 18646");
                done();
            })
    })

    it("Provjera promjene grupe za nepostojeceg studenta", (done) => {
        const objekt = {
            grupa: "Grupa3"
        }
        const index = "1500";
        chai
            .request("http://localhost:3000")
            .put("/student/" + index)
            .send(objekt)
            .end((err,d) => {
                expect(d.body.status).to.equals("Student sa indexom " + index + " ne postoji!");
                done();
            })
    })

    it("Provjera koliko grupa ima u bazi", (done) => {
        db.grupa.findAll().then((studenti) => {
            expect(studenti.length).to.equals(3);
            done();
        })
    })

    it("Provjera koliko studenata ima grupu 3", (done) => {
        db.student.findAll({
            where: {
                grupa: "Grupa3"
            }
        }).then((studenti) => {
            expect(studenti.length).to.equals(1);
            done();
        })
    })

    it("Provjera koliko studenata ima grupu 1", (done) => {
        db.student.findAll({
            where: {
                grupa: "Grupa1"
            }
        }).then((studenti) => {
            expect(studenti.length).to.equals(1);
            done();
        })
    })

    it("Dodavanje 3 nova studenta preko batch", (done) => {
        let tekst = "Ispravan,Student,1,Grupa1\nIspravan,Student,2,Grupa2\nIspravan,Student,3,Grupa3"

        chai
            .request("http://localhost:3000")
            .post("/batch/student")
            .set("content-type","text/plain")
            .send(tekst)
            .end((err,d) => {
                expect(d.body.status).to.equals("Dodano 3 studenata!");
                done();
            })
    })
    it("Isti studenti preko batch ne bi trebali biti dodani", (done) => {
        let tekst = "Ispravan,Student,1,Grupa1\nIspravan,Student,2,Grupa2\nIspravan,Student,3,Grupa3"

        chai
            .request("http://localhost:3000")
            .post("/batch/student")
            .set("content-type","text/plain")
            .send(tekst)
            .end((err,d) => {
                expect(d.body.status).to.equals("Dodano 0 studenata, a studenti {1,2,3} već postoje!");
                done();
            })

    })

    it("Neki studenti postoje, neki ne postoje", (done) => {
        let tekst = "Ispravan,Student,3,Grupa1\nIspravan,Student,4,Grupa2\nIspravan,Student,2,Grupa3\nIspravan,Student,5,Grupa3"

        chai
            .request("http://localhost:3000")
            .post("/batch/student")
            .set("content-type","text/plain")
            .send(tekst)
            .end((err,d) => {
                expect(d.body.status).to.equals("Dodano 2 studenata, a studenti {3,2} već postoje!");
                done();
            })
    })

    it("Provjera da li je povećan broj grupa", (done) => {
        db.grupa.findAll().then((studenti) => {
            expect(studenti.length).to.equals(3);
            done();
        })
    })
})
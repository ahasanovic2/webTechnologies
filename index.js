const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const exp = require('constants');
const db = require('./modeli/db.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());

app.use(express.static("public"));
app.use(express.static("public/html"));

app.get('/vjezbe', function(req, res) {
    let finalObject = {
        brojVjezbi: 0, 
        brojZadataka: []
    }, pomocniVjezbe = [];

    db.vjezba.findAll().then((tableVjezbe) => {
        finalObject.brojVjezbi = tableVjezbe.length;
        pomocniVjezbe = tableVjezbe;
        finalObject.brojZadataka = new Array(tableVjezbe.length).fill(0);
    })
    db.zadatak.findAll().then((tableZadaci) => {
        for (let i = 0; i < finalObject.brojVjezbi; i++)
            for (let j = 0; j < tableZadaci.length; j++) 
                if (pomocniVjezbe[i].id == tableZadaci[j].vjezbaId)
                    finalObject.brojZadataka[i]++;
    }).then(() => {
        res.status(200).json(finalObject);
    })
});
app.post('/vjezbe', function(req, res) {

    var brVjezbi = req.body.brojVjezbi;
    var brZadataka = req.body.brojZadataka;

    let greske = "Pogrešan parametar ";
    let brojacGresaka = 0;

    if (brVjezbi < 1 || brVjezbi > 15) {
        greske += "brojVjezbi";
        brojacGresaka++;
    }

    for (let i = 0; i < brZadataka.length; i++) {
        if (brZadataka[i] < 0 || brZadataka[i] > 10) {
            if (brojacGresaka != 0)
                greske += ",";
            greske += "z" + i;
            brojacGresaka++;
        }
    }

    if (brVjezbi != brZadataka.length) {
        if (brojacGresaka != 0)
            greske += ",";
        greske += "brojZadataka";
        brojacGresaka++;
    }

    if (brojacGresaka != 0) {
        let rezultat = {
            status: "error",
            data: greske
        };
        res.status(200).json(rezultat);
    } else {
        db.zadatak.destroy({
            cascade: true,
            where: {}
        }).then(() => {
            db.vjezba.destroy({
                cascade: true,
                where: {}
            }).then(() => {
                let vjezbePromise = [];
                for (let i = 0; i < brVjezbi; i++) {
                    let zadaciPromise = [];
                    for (let j = 0; j < brZadataka[i]; j++) {
                        zadaciPromise.push(db.zadatak.create({
                            naziv: "Zadatak" + (j + 1)
                        }));
                    }
                    Promise.all(zadaciPromise).then((kreiraniZadaci) => {
                        vjezbePromise.push(db.vjezba.create({
                            naziv: "Vjezba" + (i + 1),
                            id: i+1
                        }).then((b) => {
                            return b.setVjezbaId(kreiraniZadaci).then(() => {
                                return new Promise((resolve, reject) => {
                                    resolve(b);
                                })
                            })
                        }))
                    }).catch((err) => {
                        console.log("Greška u zapisu " + err);
                    });
                }
            }).then(() => {
                res.status(200).json({
                    status: "Kreirane vježbe"
                })
            })
        });
    }
});

app.post('/student', function(req,res) {
    let check = true;
    db.student.findOne({
        where: {
            index: req.body.index
        }
    }).then((student) => {
        if (student) {
            check = false;
            res.status(200).json({
                status: "Student sa indexom " + req.body.index + " već postoji!"
            });
        }
    }).then(() => {
        if (check) {
            db.student.create({
                ime: req.body.ime,
                prezime: req.body.prezime,
                index: req.body.index,
                grupa: req.body.grupa
            }).then((student) => {
                db.grupa.findOrCreate({
                    where: {
                        naziv: req.body.grupa
                    }
                }).then(([red,kreirano]) => {
                    db.student.findAll({
                        where: {
                            grupa: req.body.grupa
                        }
                    }).then((studenti) => {
                        return red.setGrupaId(studenti).then(() => {
                            return new Promise((resolve, reject) => {
                                resolve(red);
                            });
                        });
                    })
                })
                res.status(200).json({
                    status: "Kreiran student"
                })
            })
        }
    })
});

app.put('/student/:index', function(req,res) {
    let check = true;
    db.student.findOne({
        where: {
            index: req.params.index
        }
    }).then((student) => {
        if (!student) {
            check = false;
            res.status(200).json({
                status: "Student sa indexom " + req.params.index + " ne postoji!"
            });
        }
    }).then(() => {
        if (check) {
            db.grupa.findOrCreate({
                where: {
                    naziv: req.body.grupa
                }
            }).then(([red,kreirano]) => {
                db.student.update({
                    grupa: req.body.grupa
                }, {
                    where: {
                        index: req.params.index
                    }
                }).then((student) => {
                    db.student.findAll({
                        where: {
                            grupa: req.body.grupa
                        }
                    }).then((studenti) => {
                        return red.setGrupaId(studenti).then(() => {
                            return new Promise((resolve, reject) => {
                                resolve(red);
                            });
                        });
                    })
                })
                res.status(200).json({
                    status: "Promijenjena grupa studentu " + req.params.index
                });
            })
        }
    })
})

app.post('/batch/student', function(req,res) {

    let studenti = req.body.split('\n');
    let sviStudentiPromise = [], noviStudenti = [], grupeZaDodati = [];
    let indeksiZaBrisanje = new Array(studenti.length).fill(0);

    let pomocni = [...studenti];

    for (let i = 0; i < pomocni.length; i++) {
        for (let j = i+1; j < pomocni.length; j++) {
            let prviStudent = pomocni[i].split(',');
            let drugiStudent = pomocni[j].split(',');
            if (prviStudent[2].localeCompare(drugiStudent[2]) == 0) {
                indeksiZaBrisanje[j]++;
                pomocni.splice(j,1);
            }
        }
    }
    
    console.log(indeksiZaBrisanje);
    sviStudentiPromise = studenti.map((student) => {
        let jedanStudent = student.split(',');
        return db.student.findOne({
            where: {
                index: jedanStudent[2]
            }
        })
    })
    Promise.all(sviStudentiPromise).then((sviCSVStudenti) => {
        for (let i = 0; i < indeksiZaBrisanje.length; i++)
            if (indeksiZaBrisanje[i] == 0 && sviCSVStudenti[i])
                indeksiZaBrisanje[i]++;
        for (let i = 0; i < studenti.length; i++) {
            let jedanStudent = studenti[i].split(',');
            if (!sviCSVStudenti[i] && indeksiZaBrisanje[i] == 0) 
                noviStudenti.push(db.student.create({
                    ime: jedanStudent[0],
                    prezime: jedanStudent[1],
                    index: jedanStudent[2],
                    grupa: jedanStudent[3]
                }));
        }
        Promise.all(noviStudenti).then((ubaceniStudenti) => {
            for (let i = 0; i < indeksiZaBrisanje.length; i++) {
                let jedanStudent = studenti[i].split(',');
                for (let j = i+1; j < indeksiZaBrisanje.length; j++) {
                    let drugiStudent = studenti[j].split(',');
                    if (indeksiZaBrisanje[i] == 0 && indeksiZaBrisanje[j] == 0) {
                        if (jedanStudent[3].localeCompare(drugiStudent[3]) == 0) {
                            indeksiZaBrisanje[i] = 2;
                        }
                    }
                }
            }

            for (let i = 0; i < indeksiZaBrisanje.length; i++) {
                let jedanStudent = studenti[i].split(',');
                if (indeksiZaBrisanje[i] == 0) {
                    grupeZaDodati.push(db.grupa.findOrCreate({
                        where: {
                            naziv: jedanStudent[3]
                        }
                    }).then(([red,kreirano]) => {
                        db.student.findAll({
                            where: {
                                grupa: jedanStudent[3]
                            }
                        }).then((studenti) => {
                            return red.setGrupaId(studenti).then(() => {
                                return new Promise((resolve, reject) => {
                                    resolve(red);
                                });
                            });
                        })
                    }));
                }
            }
            Promise.all(grupeZaDodati).then((grupice) => {
                let ubaceni = 0;
                let neubaceniIndeksi = [];
                console.log(neubaceniIndeksi);
                for (let i = 0; i < indeksiZaBrisanje.length; i++) {
                    let jedanStudent = studenti[i].split(',');
                    if (indeksiZaBrisanje[i] != 1) 
                        ubaceni++;
                    else if (indeksiZaBrisanje[i] == 1) 
                        neubaceniIndeksi.push(jedanStudent[2]);
                }
                if (ubaceni == indeksiZaBrisanje.length) {
                    res.status(200).json({
                        status: "Dodano " + ubaceni + " studenata!"
                    })
                }
                else {
                    res.status(200).json({
                        status: "Dodano " + ubaceni + " studenata, a studenti {" + neubaceniIndeksi.join(',') + "} već postoje!"
                    })
                }
            })
        })
    })
})

app.listen(3000);
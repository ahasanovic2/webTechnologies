let assert = chai.assert;
let should = chai.should();

describe('Testovi', function() {
    beforeEach(function() {
        this.xhr = sinon.useFakeXMLHttpRequest();

        this.requests = [];
        this.xhr.onCreate = function(xhr) {
            this.requests.push(xhr);
        }.bind(this);
    });

    afterEach(function() {
        this.xhr.restore();
    });

    describe('Dodavanje input polja za unos u datoteku', function() {
        it ('Test za dodajInputPolja', function() {
            let divElement = document.getElementById("test1");
            VjezbeAjax.dodajInputPolja(divElement,5);
            let j = 0;
            for (let i = 2; i < divElement.childNodes.length; i+=4) 
                assert.equal(divElement.childNodes[i].id, "z" + j++, "ID-evi nisu OK");
        });
    });

    describe('Zapisujemo novi sadržaj u datoteku', function() {
        it('Test za posaljiPodatke - neuspjesan',function() {
            const objekt = {
                brojVjezbi: 4,
                brojZadataka: [1, 2, -3, 4, 5]
            };
            VjezbeAjax.posaljiPodatke(objekt,(err,data) => {
                assert.equal(data,null,"Trebala bi biti greška, a nije");
                done();
            })
        });
        it('Test za posaljiPodatke', function() {
            const objekt = {
                brojVjezbi: 5,
                brojZadataka: [1, 2, 3, 4, 5]
            };
            VjezbeAjax.posaljiPodatke(objekt, (err, data) => {
                assert.equal(err, null, "Neočekivan error");
                assert.deepEqual(JSON.parse(data), objekt, "Izlazni objekt nije jednak");
                done();
            });
        });
    });
    
    describe('Čitanje novog sadržaja iz datoteke', function() {
        it('Test za dohvatiPodatke', function() {
            const objekt = {
                brojVjezbi: 5,
                brojZadataka: [1, 2, 3, 4, 5]
            };
            VjezbeAjax.dohvatiPodatke((err,data) => {
                assert.equal(err,null,"Nema greške");
                assert.deepEqual(JSON.parse(data),objekt,"Objekti su jednaki");
                done();
            });
        });
    });

    describe('Da li su iscrtane vježbe iz .csv', function() {
        it('Test za iscrtajVjezbe - neispravan', function() {
            const objekt = {
                brojVjezbi: 4,
                brojZadataka: [1, 2, 3, 4, 5]
            };
            let divElement = document.getElementById("test2");
            VjezbeAjax.iscrtajVjezbe(divElement,objekt);
            assert.equal(divElement.childElementCount,0,"Nije se trebalo ništa iscrtati, a jeste")
        })
        it('Test za isrtajVjezbe - ispravan', function() {
            const objekt = {
                brojVjezbi: 5,
                brojZadataka: [1, 2, 3, 4, 5]
            };
            let divElement = document.getElementById("test2");
            VjezbeAjax.iscrtajVjezbe(divElement,objekt);
            assert.equal(divElement.childNodes[0].id,"vjezba1","Nije ok ID")
            let j = 1;
            for (let i = 0; i < divElement.childNodes.length; i+=2)
                assert.equal(divElement.childNodes[i].id,"vjezba" + j++,"Nije OK ID dugmeta za vježbu");
        });
    });

});
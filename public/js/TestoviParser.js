const TestoviParser = (function(){
    const dajTacnost = function(report) {
        try {
            let izvjestaj = JSON.parse(report);
            if (izvjestaj.stats.pending > 0 || izvjestaj.stats.failures != izvjestaj.failures.length || izvjestaj.stats.passes != izvjestaj.passes.length || izvjestaj.tests.length != izvjestaj.stats.tests) 
                throw "Neispravan format";
            
            let tacnost = (izvjestaj.stats.passes / izvjestaj.stats.tests) * 100;
            if (Number.isInteger(tacnost)) tacnost = tacnost + "%";
            else tacnost = (Math.round(tacnost*10) / 10) + "%";

            let tekstoviGresaka = [];
            for (let i = 0; i < izvjestaj.failures.length; i++) 
                tekstoviGresaka[i] = izvjestaj.failures[i].fullTitle;

            return {tacnost: tacnost, greske: tekstoviGresaka};
        } 
        catch(e) {
            return JSON.parse('{"tacnost":"0%","greske":["Testovi se ne mogu izvršiti"]}');
        }
    };

    const porediRezultate = function(rezultat1, rezultat2) {
        try {
            const izvjestaj1 = JSON.parse(rezultat1);
            const izvjestaj2 = JSON.parse(rezultat2);
            
            let rezultat = new Object();

            let brojJednakihTestova = 0;
            for (let i = 0; i < izvjestaj1.tests.length; i++)
                for (let j = 0; j < izvjestaj2.tests.length; j++)
                    if (izvjestaj1.tests[i].fullTitle.localeCompare(izvjestaj2.tests[j].fullTitle) == 0)
                        brojJednakihTestova++;

            if (izvjestaj1.tests.length == izvjestaj2.tests.length && brojJednakihTestova == izvjestaj1.tests.length){
                let x = dajTacnost(rezultat2);
                rezultat = {promjena: x.tacnost, greske: x.greske.sort((a,b) => { return a.localeCompare(b); })};
            }
            else {
                let nazivi1 = distinctTestovi(izvjestaj1, izvjestaj2);

                let x = (nazivi1.length + izvjestaj2.failures.length) / (nazivi1.length + izvjestaj2.tests.length) * 100;
                if (Number.isInteger(x)) x = x + "%";
                else x = (Math.round(x*10) / 10) + "%";
                rezultat.promjena = x;

                let nazivi2 = [];
                for (let i = 0; i < izvjestaj2.failures.length; i++) 
                    nazivi2[i] = izvjestaj2.failures[i].fullTitle;

                nazivi1.sort();
                nazivi2.sort();

                rezultat.greske = nazivi1.concat(nazivi2);
            }
            return rezultat;
        } catch(e) {
            return JSON.parse('{"promjena":"0%","greske":["Testovi se ne mogu izvršiti"]}');
        }
    };
    
    const distinctTestovi = function(izvjestaj1, izvjestaj2) {
        let povrat = [];
        let index = 0;
        for (let i = 0; i < izvjestaj1.failures.length; i++) {
            let jedinstven = true;

            for (let j = 0; j < izvjestaj2.tests.length; j++) 
                if (izvjestaj1.failures[i].fullTitle.localeCompare(izvjestaj2.tests[j].fullTitle) == 0)
                    jedinstven = false;

            if (jedinstven)
                povrat[index++] = izvjestaj1.failures[i].fullTitle;
        }
        return povrat;
    };
    return {
        dajTacnost:dajTacnost,
        porediRezultate:porediRezultate
    };
}());
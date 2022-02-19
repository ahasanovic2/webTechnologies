const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const exp = require('constants');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));
app.use(express.static("public/html"));

app.get('/vjezbe',function (req, res) {
    var data = fs.readFileSync('vjezbe.csv','utf8');
    let niz = data.split(" ");
    let zadaci = niz[1].split(",").map(Number);
    res.status(200).json({brojVjezbi: parseInt(niz[0]), brojZadataka: zadaci});
});

app.post('/vjezbe', function (req, res) {

    var brVjezbi = req.body.brojVjezbi;
    var brZadataka = req.body.brojZadataka;
    
    let greske = "Pogrešan parametar ";
    let brojacGresaka = 0;

    if (brVjezbi < 1 || brVjezbi > 15) {
        greske += "brojVjezbi";
        brojacGresaka ++;
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
        let rezultat = {status:"error",data:greske};
        res.status(200).json(rezultat);
    }
    else {
        let povrat = "";
        povrat += brVjezbi;
        povrat += " ";
        for (let i = 0; i < brZadataka.length; i++) {
            povrat += brZadataka[i];
            if (i != brZadataka.length - 1)
                povrat += ",";
        }
        fs.writeFileSync('vjezbe.csv',povrat,'utf8');
        res.status(200).json(req.body);
    }
});

app.listen(3000);
const StudentAjax = (function() {
    const dodajStudenta = function(student, callbackFja) {
        let ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
            if (ajax.readyState == 4 && ajax.status == 200)
                callbackFja(null,ajax.responseText);
        }

        ajax.open("POST","http://localhost:3000/student",true);
        ajax.setRequestHeader('Content-type','application/json');
        ajax.send(JSON.stringify(student));
    };

    const postaviGrupu = function(index,grupa,callbackFja) {
        let ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
            if (ajax.readyState == 4 && ajax.status == 200)
                callbackFja(null,ajax.responseText);
        }

        ajax.open("PUT","http://localhost:3000/student/" + index,true);
        ajax.setRequestHeader('Content-type','application/json');
        ajax.send(JSON.stringify(grupa));
    };

    const dodajBatch = function(csvStudenti, callbackFja) {
        let ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
            if (ajax.readyState == 4 && ajax.status == 200)
                callbackFja(null,ajax.responseText);
        }

        ajax.open("POST","http://localhost:3000/batch/student",true);
        ajax.setRequestHeader('Content-type','text/plain');
        ajax.send(csvStudenti);
    }
    return {
        dodajStudenta: dodajStudenta,
        postaviGrupu: postaviGrupu,
        dodajBatch: dodajBatch
    }
}());
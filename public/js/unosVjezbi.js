function dohvatiPolja() {
    VjezbeAjax.dodajInputPolja(document.getElementById("zadaci"),document.getElementById("brVjezbi").value);
}

function saljiPost() {
    let povrat = new Object();

    povrat.brojVjezbi = parseInt(document.getElementById("brVjezbi").value);

    let pomocniNiz = [];
    for (let i = 0; i < povrat.brojVjezbi; i++) 
        pomocniNiz[i] = parseInt(document.getElementById("z" + i).value);
    
    for (let i = 0; i < pomocniNiz.length; i++) {
        if (pomocniNiz[i] < 0 || pomocniNiz[i] > 10) {
            console.log("Neispravni podaci u input poljima");
            return;
        }
    }


    povrat.brojZadataka = pomocniNiz;

    VjezbeAjax.posaljiPodatke(povrat, (err, data) => {
        if (err)
            console.log("Neuspješno poslani podaci");
        else   
            console.log("Uspješno poslani podaci");
    });
}
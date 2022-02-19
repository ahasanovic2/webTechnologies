const VjezbeAjax = (function() {
    const dodajInputPolja = function (DOMelementDIVauFormi,brojVjezbi) {
        DOMelementDIVauFormi.innerHTML = "";

        if (brojVjezbi < 1 || brojVjezbi > 15) {
            let labela = document.createElement("label");
            labela.textContent = "Nepravilan unos";
            DOMelementDIVauFormi.appendChild(labela);
            return;
        }

        for(let i = 0; i < brojVjezbi; i++){
            let labela = document.createElement("label");                       
            labela.textContent = "Broj zadataka u vježbi " + (i+1) + ":  ";   

            let inputPolje = document.createElement("input");
            inputPolje.setAttribute("type", "number");       
            inputPolje.setAttribute("value", "4");    
            inputPolje.setAttribute("id", "z"+i);   
            inputPolje.setAttribute("name","z"+i);  

            DOMelementDIVauFormi.appendChild(document.createElement("br"));
            DOMelementDIVauFormi.appendChild(labela);
            DOMelementDIVauFormi.appendChild(inputPolje);
            DOMelementDIVauFormi.appendChild(document.createElement("br"));
        }
    };

    const posaljiPodatke = function(vjezbeObjekat,callbackFja) {
        let ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
            if (ajax.readyState == 4 && ajax.status == 200)
                callbackFja(null,ajax.responseText);
        }

        ajax.open("POST","http://localhost:3000/vjezbe",true);
        ajax.setRequestHeader('Content-type','application/json');
        ajax.send(JSON.stringify(vjezbeObjekat));
    };

    const dohvatiPodatke = function(callbackFja) {
        let ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
            if (ajax.readyState == 4 && ajax.status == 200)
                callbackFja(null,ajax.responseText);
        }

        ajax.open("GET","http://localhost:3000/vjezbe",true);
        ajax.send();
    };

    const iscrtajVjezbe = function(divDOMelement, objekat) {

        for (let i = 1; i <= objekat.brojVjezbi; i++) {
            let btn = document.createElement("button");

            btn.setAttribute("id", "vjezba" + i);
            btn.setAttribute("value", objekat.brojZadataka[i-1]);
            btn.setAttribute("class", "block");

            btn.textContent = "VJEŽBA " + i;

            btn.onclick = function() {
                iscrtajZadatke(btn,btn.value);
            }

            divDOMelement.appendChild(btn);
            
            let div = document.createElement("div");
            div.setAttribute("class","odabirZadatka");
            div.style.display = "none";

            divDOMelement.appendChild(div);
        }
    };

    const iscrtajZadatke = function(vjezbaDOMelement,brojZadataka) {
        let divDOMelement = vjezbaDOMelement.parentNode;

        let pomocni = 0;

        for (let i = 2; i <= divDOMelement.childElementCount; i+=2) {
            if (divDOMelement.childNodes[i].style.display != "none") 
                pomocni = i;
            divDOMelement.childNodes[i].style.display = "none";
        }

        for (let i = 1; i <= divDOMelement.childElementCount; i+=2) {
            if (divDOMelement.childNodes[i].isSameNode(vjezbaDOMelement)) {
                if (divDOMelement.childNodes[i+1].childElementCount == 0) {
                    for (let j = 1; j <= brojZadataka; j++) {
                        let btn = document.createElement("button");

                        btn.setAttribute("id", "zadatak" + i);
                        btn.setAttribute("class", "zad");
                        btn.textContent = "ZADATAK " + j;

                        divDOMelement.childNodes[i+1].appendChild(btn);
                    }
                }
                if (i+1 != pomocni)
                    divDOMelement.childNodes[i+1].style.display = "inline-block";
                else 
                    divDOMelement.childNodes[i+1].style.display = "none";
            }
        }
    };

    return {
        dodajInputPolja:dodajInputPolja,
        posaljiPodatke:posaljiPodatke,
        dohvatiPodatke:dohvatiPodatke,
        iscrtajVjezbe:iscrtajVjezbe,
        iscrtajZadatke:iscrtajZadatke
    };
})();
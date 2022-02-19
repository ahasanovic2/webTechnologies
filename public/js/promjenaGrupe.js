function posaljiPodatke() {
    let grupa = {};

    let index = document.getElementById("index").value;
    grupa.grupa = document.getElementById("grupa").value;
    
    StudentAjax.postaviGrupu(index,grupa,(err,data) => {
        document.getElementById("ajaxstatus").innerHTML = data;
    })
}
function posaljiPodatke() {
    StudentAjax.dodajBatch(document.getElementById("polje").value,(err,data) => {
        document.getElementById("ajaxstatus").innerHTML = data;
    })
}
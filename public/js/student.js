function posaljiPodatke() {
    let student = {};
    
    student.ime = document.getElementById("ime").value;
    student.prezime = document.getElementById("prezime").value;
    student.index = document.getElementById("index").value;
    student.grupa = document.getElementById("grupa").value;

    StudentAjax.dodajStudenta(student, (err, data) => {
        document.getElementById("ajaxstatus").innerHTML = data;     
    });
}
/*Desloca o pseudo-elemento .porcento::after no edge*/
if (/Edge/.test(navigator.userAgent)) {
    var inputMembrosProjetos = document.querySelector("#membrosProjetos");
    
    inputMembrosProjetos.addEventListener("focus", function () {
        var divPorcento = document.querySelector(".porcento");
        divPorcento.classList.add("edge");
    });

    inputMembrosProjetos.addEventListener("blur", function () {
        var divPorcento = document.querySelector(".porcento");
        divPorcento.classList.remove("edge");
    });
}
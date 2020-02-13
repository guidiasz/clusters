/*analisa qual é o cluster com base na pontuacao e atribui o estilo de cor ao cluster*/
function defineCluster(ej, divCluster) {
    if(ej.pontuacao <= 26320.55) {
        ej.restanteProximoCluster = (26320.56 - ej.pontuacao).toFixed(2);
        ej.cluster = 1;
        divCluster.className = "red";
    }
    else if(ej.pontuacao >= 26320.56 && ej.pontuacao <= 73950) {
        ej.restanteProximoCluster = (73950.01 - ej.pontuacao).toFixed(2);
        ej.cluster = 2;
        divCluster.className = "orange";
    }
    else if(ej.pontuacao > 73950 && ej.pontuacao <= 166666.71) {
        ej.restanteProximoCluster = (166666.72 - ej.pontuacao).toFixed(2);
        ej.cluster = 3;
        divCluster.className = "teal";
    }
    else if(ej.pontuacao > 166666.71 && ej.pontuacao <= 389536.5){
        ej.restanteProximoCluster = (389536.51 - ej.pontuacao).toFixed(2);
        ej.cluster = 4;
        divCluster.className = "blue";
    }
    else if(ej.pontuacao >= 389536,51){
        ej.cluster = 5;
        divCluster.className = "green";
    }
}

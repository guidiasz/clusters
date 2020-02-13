/*funcao principal*/
//chamada quando o formulario é enviado
function submit(){
    var divPontuacao = document.querySelector("#pontuacao"),
    divCluster = document.querySelector("#cluster"),
    divRestanteProximoCluster = document.querySelector("#faltam-proximo-cluster"),
    form = document.querySelector(".form-calculadora");
    
    var ej = {
        membrosProjetos: form.membrosProjetos.value,
        faturamento: form.faturamento.value,
        membros: form.membros.value,
        nps: form.nps.value,
        pontuacao: "",
        cluster: 1,
        restanteProximoCluster: 0
    }

    calculaPontuacao(ej);
    defineCluster(ej, divCluster);
    
    //colocando os valores calculados no site
    divCluster.textContent = ej.cluster;
    divPontuacao.textContent = new Intl.NumberFormat('pt-BR', {}).format(ej.pontuacao);
    divRestanteProximoCluster.textContent = new Intl.NumberFormat('pt-BR', {}).format(ej.restanteProximoCluster);

    //exibe resultado no site
    document.querySelector("#resultado").style.display = "block";
    evento('Calculou cluster', 'calcular', 'clique' );
}
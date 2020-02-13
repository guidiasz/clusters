/*aplica a formula do cluster*/
function calculaPontuacao(ej) {
    ej.pontuacao = ej.membrosProjetos / 100 * (ej.faturamento / ej.membros) * ej.nps;
    ej.pontuacao = ej.pontuacao.toFixed(2);
}
let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = geraNumeroAleatorio();


let numeroTentativas = 1;

function exibeTextoNaTela(tag, texto) {
    let campoNoHtml = document.querySelector(tag);
    campoNoHtml.innerHTML = texto;
    responsivevoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}

function mesagemInicial() {
    exibeTextoNaTela('h1', 'Jogo do numero Secreto');
    exibeTextoNaTela('p','Escolha um numero entre 1 e 10');
}

mesagemInicial();

function verificaChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        let palavraTentativa = numeroTentativas > 1 ? 'tentativas':'tentativa';
        exibeTextoNaTela('h1', 'ACERTOU!');
        let mensagemTentativas = `Parabéns o numero secreto foi descoberto com ${numeroTentativas} ${palavraTentativa}`;
        exibeTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibeTextoNaTela('p', 'O numero secreto é menor');
        } else {
            exibeTextoNaTela('p', 'O numero secreto é maior');
        }

        limparCampo();
        numeroTentativas++;
   }
}

function geraNumeroAleatorio() {
    let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosLista = listaNumerosSorteados.length;

    if(quantidadeElementosLista == numeroLimite) {
        listaNumerosSorteados = [];
    }

    if(listaNumerosSorteados.includes(numeroEscolhido)) {
        return geraNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
    
}

function limparCampo() {
    let campo = document.querySelector('input');
    campo.value = '';
}

function reiniciarJogo() {
    numeroSecreto = geraNumeroAleatorio();
    limparCampo();
    numeroTentativas = 1;
    mesagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}
//Usar as funções me permite menos repetição de cod




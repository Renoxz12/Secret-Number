//Frases principais
let listaDeNumerosSorteados = [];
let numeroLimite = 10;

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

console.log(numeroSecreto);

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}

function exibirMensagemInicial() {
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 a 10');
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!')
        palavra = tentativas > 1? 'tentativas' : 'tentativa';
        let mensagemTentativas = `você descobriu o número secreto com ${tentativas} ${palavra}!`;
        exibirTextoNaTela('p', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');

     } else{
     if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O número secreto é menor!');
     } else{
        exibirTextoNaTela('p', 'O número secreto é maior!'); 
     }
      tentativas++;
      limparCampo();
    }
}

function limparCampo() {
  chute =  document.querySelector ('input');
  chute.value = '';
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio ();
  limparCampo ();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random()* numeroLimite + 1);
  let quantidadeDeElementosNaLista = ListaDeNumerosSorteados.length;
  if(quantidadeDeElementosNaLista == numeroLimite){
  listaDeNumerosSorteados = [];
  } 
  if (listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
  }
  else {
  listaDeNumerosSorteados.push(numeroEscolhido);
  return numeroEscolhido;
  }

}

function gerarNumeroAleatorio() {
  return parseInt(Math.random()* 10 + 1);
}


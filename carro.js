//codigo do carro

//listas de variaveis
var xCarro = [600, 600, 600, 600, 600, 600]
var yCarro = [40, 96, 150, 210, 270, 318]
var velocidadeCarro = [2, 2.5, 3.2, 5, 1.5, 3.3]
var comprimentoCarro = 50;
var alturaCarro = 40;

function mostraCarro(){
  for(var i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarro[i], yCarro[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for(var i = 0; i < imagemCarros.length; i++){
    xCarro[i] -= velocidadeCarro[i];
  }
}

function voltaPosicaoInicialCarro(){
  for(var i = 0; i < imagemCarros.length; i++){
    if(xCarro[i] < -50){
    xCarro[i] = 600;
    }
  }
}
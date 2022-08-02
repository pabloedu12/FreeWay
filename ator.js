//codigo do ator

var yAtor = 375;
var xAtor = 100;
var colisao = false;
var meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
   if(keyIsDown(DOWN_ARROW)){
    if(podeMover()){
      yAtor += 3;
    }
  }
}


function verificaColisao(){
  for(var i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarro[i], yCarro[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if(colisao){
      voltaAtorInicial();
      if(pontosMaiorZero()){
        meusPontos -= 1;
        somColisao.play();
      }
    }
  }
}

function voltaAtorInicial(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  fill(color(220,20,60))
  textSize(25)
  text(meusPontos, width/5, 27)
}

function marcaPontos(){
  if(yAtor < 15){
    meusPontos += 1;
    voltaAtorInicial();
    somPonto.play();
  }
}

function pontosMaiorZero(){
  return meusPontos > 0
}

function podeMover(){
  return yAtor < 375;
}
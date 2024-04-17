function setup() {
  createCanvas(400, 300);
  background("#1E57E9");//função para pintar o fundo
}

function draw() {
  stroke("#8BC34A");//altera a cor da borda do desenho
  fill("red");//altera a cor do prenchimento do desenho

  
if(mouseIsPressed){
  rect(mouseX, mouseY, 40, 40);
}
}
//comedia, ação, animação, aventura, fantasia, Teen

//epa! cadê o noé?, LIVRE, aventura, animação, comedia, fantasia
//soul, LIVRE, animação, aventura
//sonic, 10, animação, aventura, comedia, ação
//space jam, 10, animação, aventura, comedia
//meninas malvadas, 12, comedia, Teen
//gente grande, 12, comedia
//cruella, 12, aventura, fantasia
//as branquelas, 13, comedia, ação, aventura
//deedpool, 16, acão, comedia, fantasia

let campoIdade;
let campoAventura;
let campoComedia;
let campoFantasia;
let campoAção;
let campoTeen;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "RR recomenda filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("0");
  campoAventura = createCheckbox("Gosta de filmes de Aventura ?");
  campoComedia = createCheckbox("Gosta de filmes de Comedia ?");
  campoTeen = createCheckbox("Gosta de filmes teen ?");
  campoAção = createCheckbox("Gosta de filmes de Ação ?");
  campoFantasia = createCheckbox("Gosta de fimes de Fantasia ?");
  campoAnimação = createCheckbox("Gosta de fimes de Animação ?");
}

function draw() {
  background("#CBEFFF");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let gostaDeComedia = campoComedia.checked();
  let gostaDeTeen = campoTeen.checked();
  let gostaDeAção = campoAção.checked();
  let gostaDeAnimação = campoAnimação.checked();
  let recomendacao = geraRecomendacao(
    idade,
    gostaDeFantasia,
    gostaDeComedia,
    gostaDeAção,
    gostaDeAnimação,
    gostaDeAventura,
    gostaDeTeen
  );
  fill(color(95, 0, 95));
  textAlign(CENTER, CENTER);
  textSize(30);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(
  idade,
  gostaDeFantasia,
  gostaDeAventura,
  gostaDeComedia,
  gostaDeAção,
  gostaDeAnimação,
  gostaDeTeen
) 
{
  if (idade >= 10) {
    if (idade >= 14) {
      if(gostaDeComedia || gostaDeAção) {
      return "As branquelas";
      } else {
        return "Gente grande";
      }
    } else {
      if (idade >= 12) {
        if(gostaDeTeen || gostaDeComedia) {
          return "As branquelas";          
        } else{
         return "Cruella";
        }
      } else {
        if (gostaDeAnimação || gostaDeAção) {
          return "Sonic";
        } else {
          return "Space jam";
        }
      }
    }
  } else {
    if (gostaDeAnimação || gostaDeComedia) {
      return "Epá, cadê o Noé?";
    } else {
      return "Soul";
    }
  }
}
const proffys = [
  {
    name: "Anderson Antunes",
    avatar:
      "https://avatars1.githubusercontent.com/u/48885210?s=460&u=5b39afe2f6e5c704ef722dae12994ddf04500701&v=4",
    whatsapp: "11974378859",
    bio:
      "Entusiasta das melhores tecnologias de química avançada.<br /><br /> Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject: "Química",
    cost: "20",
    weekday: [0],
    time_from: [720],
    time_to: [1220],
  },
  {
    name: "Luiz Antunes",
    avatar:
      "https://avatars1.githubusercontent.com/u/48885210?s=460&u=5b39afe2f6e5c704ef722dae12994ddf04500701&v=4",
    whatsapp: "11974378859",
    bio:
      "Entusiasta das melhores tecnologias de química avançada.<br /><br /> Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject: "Química",
    cost: "20",
    weekday: [1],
    time_from: [720],
    time_to: [1220],
  },
];

function pageLanding(require, response) {
  return response.render("index.html");
}

function pageStudy(require, response) {
  return response.render("study.html");
}

function pageGiveClasses(require, response) {
  return response.render("give-classes.html");
}

const express = require("express");
const server = express();

// Configuração nunjucks
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

server
  // Configurar arquivos estáticos (css, scripts, imagens)
  .use(express.static("public"))
  // Rotas da aplicação
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  .listen(5500); // 5500 - número da porta usada;

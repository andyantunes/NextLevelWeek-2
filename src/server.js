const express = require("express");
const server = express();

const {
  pageLanding,
  pageStudy,
  pageGiveClasses,
  saveClasses,
} = require("./pages");

// Configuração nunjucks
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

// Configuração do servidor
server
  // Receber os dados do require.body
  .use(express.urlencoded({ extended: true }))
  // Configurar arquivos estáticos (css, scripts, imagens)
  .use(express.static("public"))
  // Rotas da aplicação
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  .post("/save-classes", saveClasses)
  .listen(5500); // 5500 - número da porta usada;

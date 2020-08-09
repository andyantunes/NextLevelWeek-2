const express = require("express");
const server = express();

const { pageLanding, pageStudy, pageGiveClasses } = require("./pages");

// Configuração nunjucks
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

// Configuração do servidor
server
  // Configurar arquivos estáticos (css, scripts, imagens)
  .use(express.static("public"))
  // Rotas da aplicação
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  .listen(5500); // 5500 - número da porta usada;

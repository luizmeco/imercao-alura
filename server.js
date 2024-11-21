// Importa o módulo express, usado para criar e configurar o servidor web.
import express from "express";
import routes from "./src/routes/postsRoutes.js";

// Cria uma instância do aplicativo express, que será usado para configurar as rotas e middlewares.
const app = express();
routes(app)
// Adiciona um middleware para interpretar requisições com corpo em JSON.
app.use(express.json());

// Configura o servidor para escutar na porta 3000 e exibe uma mensagem no console quando ele estiver ativo.
app.listen(3000, () => {
  console.log("Servidor escutando...");
});

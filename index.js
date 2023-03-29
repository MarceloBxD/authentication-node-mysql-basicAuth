const express = require("express");

const app = express();
const router = require("./src/routes/routes");
const connection = require("./src/server/mysql");
const bodyParser = require("body-parser");

// Usando as rotas criadas
app.use(router);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Conectando ao banco de dados
connection.connect((err) => {
  if (err) {
    console.log("Error connecting to database.");
    return;
  }
  console.log("Connection established.");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

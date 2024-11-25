const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World GET!");
});

app.post("/", (req, res) => {
  res.send("Resposta Post!");
});

app.listen(port, () => {
  console.log(`Example app listening on : http://localhost:${port}/`);
});

/**
 * GET :   Busca as informações
 * POST :  Envia informações ( criação)
 * PUT :   Atualiza TODAS AS informações
 * PATCH:  Atualiza informções PARCIALMENTE
 * DELETE: Deletar um dado
 */

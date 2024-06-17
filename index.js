import express from "express";

import bodyParser from 'body-parser';

const app = express();

const port = 3000;

app.use(bodyParser.json({ limit: "50mb" }));

app.get("/api", async (req, res) => {
    res.send({Message: "Api dando oi pro Vitor"})
})

app.listen(port, () => console.log(`rodando porta ${port}`))
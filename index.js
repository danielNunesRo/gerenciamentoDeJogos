const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Game = require("./database/Game");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


connection.authenticate().then(() => {
    console.log("Conectado com o banco de dados!")
}).catch((msgErro) => {
    console.log(msgErro);
});


app.listen(8001, () => {
    console.log("Servidor rodando na porta: 8001");
});

//rotas
app.get("/games", (req, res) => {
    Game.findAll().then(jogos => {
        res.json(jogos)
    }).catch(err =>{
        console.error(err);
        res.status(500).json({ message: 'Erro interno do servidor' });
    });
});

app.post('/games', (req, res) => {
    const { nome, ano, price } = req.body;

    if(!nome || !ano || !price) {
        return res.status(400).json({message: 'Todos os campos são obrigatórios'})
    }

    Game.create({
        nome,
        ano,
        price
    })
    .then(jogo => {
        res.status(201).json({ message: 'Jogo criado com sucesso', jogo });
    }).catch(err => {
        console.error(err);
        res.status(500).json({ message: 'Erro interno do servidor' });
    })
})
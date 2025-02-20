const express = require('express');
const app = express();

let selecoes = [
    {nome: 'Brasil'},
    {nome: 'Estados Unidos'},
    {nome: 'Japão'},
    {nome: 'Coréia do Sul'},
    {nome: 'Argentina'},
    {nome: 'Alemanhã'},
    {nome: 'França'},
    {nome: 'Itália'},
    {nome: 'Suécia'},
    {nome: 'Nigéria'}
];

let data = new Date();
let dia_mes = data.getDate();

let selecao;

if(dia_mes < 11)
{
    selecao = selecoes[dia_mes-1].nome;
}
else
{
    selecao = "Não há uma seleção para hoje";
}

app.get('/', (req, res) => {
    res.json({selecao: selecao});
});

app.listen(8080 , () => {
    console.log('Servidor iniciado');
});
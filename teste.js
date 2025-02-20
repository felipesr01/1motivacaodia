const express = require('express');
const app = express();

let materias = [
    {nome: 'Matemática'},
    {nome: 'Física'},
    {nome: 'Química'},
    {nome: 'Português'},
    {nome: 'Geografia'}
];

let data = new Date();
let dia_semana = data.getDay();

let aula;

if(dia_semana >= 1 && dia_semana <=5)

{
    aula = materias[dia_semana-1].nome;
}
else

{
    aula = "Hoje não tem aula";
}

app.get('/', (req, res) => {
    res.json({aula: aula});
});

app.listen(8080 , () => {
    console.log('Servidor iniciado');
});
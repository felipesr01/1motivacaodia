const express = require('express')
const app = express()

let data = new Date()

let mensagemDia = require('./mensagemDia')

app.get('/', (req, res) => {
    let dia = data.getDate()
    let mensagemSelecionada = mensagemDia.retornarMensagemDia(dia)

    res.json({mensagem: mensagemSelecionada})
})

app.listen(8080, () => {
    console.log(`Servidor node iniciado em ${data}`)
})
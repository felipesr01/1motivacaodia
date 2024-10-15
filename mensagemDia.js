let dados = require('./dados')

let retornarMensagemDia = (dia) => {
    return dados.frases[dia -1]
}

exports.retornarMensagemDia = retornarMensagemDia
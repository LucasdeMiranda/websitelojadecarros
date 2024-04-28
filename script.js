function verificaLogin() {
    /* Ess função é responsável pela validação do login */
    /*atribuindo valor as váriaveis u e s */
    var u = document.getElementById("usuario").value;
    var s = document.getElementById("senha").value;

    if (s.length === 6 && u.length >= 6) {
        alert("Login realizado com sucesso!")
        /*Nesta parte se verifica se o que o usuário digitou está de acordo com os critérios estabelecidos*/

    }
    else {
        alert("Senha  ou Usuário incorretos!")
    }
}
function comprar() {
    var c = document.getElementById("cartao").value
    var agen = document.getElementById("agencia").value
    var ce = document.getElementById("cep").value
    if (c.length === 16 && agen.length === 6 && ce.length === 9) {
        /* Esta função válida o formulário de compra de acorda com os critérios definidos no if */

        alert("Compra realizada com sucesso!Aguarde para mais informações.")
    }
    else {
        alert("N° do cartão, Cep ou agência incorretos!")
    }

}
function contato() {
    var num = document.getElementById("telefone").value
    if (num.length === 9) {
        /* Se o número tiver 9 digitos então está correto senão pede para tentar novamente */
        alert("Mensagem enviada com sucesso!")
    }
    else {
        alert("Telefone inválido!Tente novamente.")
    }

}
function voltar() {
    /* Essa função permite que o cliete volte uma página */
    
}
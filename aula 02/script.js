function calcularSoma() {
    // pega os numeros digitados nos campos de entrada
    var numeroA = parseFloat(document.getElementById('numeroA').value);
    var numeroB = parseFloat(document.getElementById('numeroB').value);

    //verifica se os numeros sao validos (ou seja, se sao numeros mesmo)
    if (!isNaN(numeroA) && !isNaN(numeroB)) {
        // Realiza as somas dos numeros
        var resultados = numeroA + numeroB;

        // exibe o resultado na pagina
        document.getElementById('resultado').innerHTML =
         "A soma de " + numeroA + " e " + numeroB + " é: " + resultados;
    } else {
        // Se os numeros nao forem valiados, pede para digitar numeros corretos
        document.getElementById('resultado').innerHTML =
         "por favor, digite numeros validos.";
    }
}
function limparTela() {

    document.getElementById("resultado").innerHTML = "";


    document.getElementById("numeroA").value = "";
    document.getElementById("numeroB").value = "";
}
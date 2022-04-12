// // var inputidade = document.getElementById("ano")
// // console.log(inputidade.value);

function verificar() {
    var input1 = document.getElementById("inicio")
    var input2 = document.getElementById("fim")
    var input3 = document.getElementById("passar")
    var resultado = document.getElementById("res")

    var num1 = Number(input1.value)
    var num2 = Number(input2.value)
    var num3 = Number(input3.value)

    if (document.getElementById("inicio").value == "") {
        alert('Por favor, preencha o campo inicio');
        document.getElementById("inicio").focus();
        return false
    } else if (document.getElementById("fim").value == "") {
        alert('Por favor, preencha o campo fim');
        document.getElementById("fim").focus();
        return false
    }
    document.getElementById("res").style.fontFamily = "cursive";

    for (let c = num1; c <= num2; c += num3) {
        resultado.innerHTML += ` ${c} -- `


    }

}



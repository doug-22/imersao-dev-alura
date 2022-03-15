let notas = document.querySelectorAll("input");
let printMedia = document.querySelector(".media");
let printSituacao = document.querySelector(".situacao");

function CalcularMedia(){
    let nota1 = parseInt(notas[0].value);
    let nota2 = parseInt(notas[1].value);
    let nota3 = parseInt(notas[2].value);
    let soma = nota1 + nota2 + nota3;
    let media = (soma/3).toFixed(1);

    if(media >= 7){
        printMedia.innerHTML = `${media}`;
        printSituacao.innerHTML = "APROVADO!";
        printSituacao.style.color = "greenyellow";
    } else {
        printMedia.innerHTML = media;
        printSituacao.innerHTML = "REPROVADO!";
        printSituacao.style.color = "red";
    }
}
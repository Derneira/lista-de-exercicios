function exercicio1(){
  var nota = parseInt(prompt("Digite um Número"));

  while(nota < 0 || nota > 10){
    nota = parseInt(prompt("digite novamente a nota"))
}

document.getElementById("root").style.display = "block"
document.getElementById("root").innerHTML = `
<p> A sua Nota: ${nota}</p>
`
}

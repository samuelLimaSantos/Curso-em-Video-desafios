function visual(pos) {
    let option = document.getElementsByTagName("option")[pos];
    let valor = option.value;
    var visual = document.querySelector("#visual");

    visual.innerHTML = valor;
}


function gerarTabuada() {
    let numero = document.querySelector("#numero");
    let resultado = document.querySelector("#select");
    let titulo = document.querySelector("#resultado");
    
    if (numero.value == "") {
        alert(`Preencha o número`);
    } else {
        var visual = document.querySelector("#visual");
        visual.innerHTML = "";
        
        resultado.innerHTML = "";
        titulo.innerHTML = `Tabuada de ${numero.value}: <br>`;
        for (i = 0; i <= 10; i++) {
            
            let optionElement = document.createElement("option");
            optionElement.setAttribute("id", i)
            optionElement.setAttribute("onclick", "visual("+ i +")");
            
            optionElement.innerHTML += `${Number(numero.value)} * ${i} = ${Number(numero.value) * i} <br>`;
            resultado.appendChild(optionElement);
        }
    }
}
    

var botao = document.querySelector("#botao");
botao.onclick = gerarTabuada;

document.addEventListener("keyup", event = (event) => {
    if (event.keyCode === 13) {
        gerarTabuada();
    }
});
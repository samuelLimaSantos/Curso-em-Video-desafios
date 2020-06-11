function visual(pos) {
    let option = document.getElementsByTagName("option")[pos];
    let valor = option.value;
    var visual = document.querySelector(".visual");

    visual.innerHTML = valor;
}


function gerarTabuada() {
    const numeroValue = document.querySelector("input[name=numero]").value;
    const resultBloc = document.querySelector("#select");
    const titulo = document.querySelector(".resultado");
    
    if (numeroValue == "") {
        alert(`Preencha o número`);
    } else {
        const visualElement = document.querySelector(".visual");
        visualElement.innerHTML = "";
        
        resultBloc.innerHTML = "";
        titulo.innerHTML = `Tabuada de ${numeroValue}: <br>`;
        for (i = 0; i <= 10; i++) {
            
            let optionElement = document.createElement("option");
            optionElement.setAttribute("id", i)
            optionElement.setAttribute("onclick", "visual("+ i +")");
            
            optionElement.innerHTML += `${Number(numeroValue)} * ${i} = ${Number(numeroValue) * i} <br>`;
            resultBloc.appendChild(optionElement);
        }
    }
}
    

const buttonElement = document.querySelector("#botao");
buttonElement.onclick = gerarTabuada;

document.addEventListener("keyup", event = (event) => {
    if (event.keyCode === 13) {
        gerarTabuada();
    }
});
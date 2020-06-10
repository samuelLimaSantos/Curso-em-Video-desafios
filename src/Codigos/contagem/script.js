function iteracao(passo) {
    resultado.innerHTML = `Contando: <br>`;
    
        if (Number(inicio.value) > Number(fim.value)) {
        
            for (i = Number(inicio.value); i >= Number(fim.value); i -= passo) {
                resultado.innerHTML += `${i} 👉 `;
            }    
        } else {
            for (i = Number(inicio.value); i <= Number(fim.value); i += passo) {
                resultado.innerHTML += `${i} 👉 `;    
            }
        } 

        resultado.innerHTML += ` 🏁`;
}

function contagem() {
    let inicio = document.querySelector("#inicio").value;
    let fim = document.querySelector("#fim").value;
    let passo = document.querySelector("#passo").value;
    let resultado = document.querySelector("#resultado");


    if (!Number(inicio) || !Number(fim)) {
        resultado.innerHTML = `Operação inválida! Preencha todos os campos!`;
    } else if (Number(passo) == 0) {
        alert(`Passo inválido! Considerando passo como 1!`)
        iteracao(1)
    } else {
        iteracao(Number(passo));
        
    }

}
    
let button = document.querySelector("#botao");
button.onclick = contagem;

document.addEventListener("keyup", event = (event) => {
    if (event.keyCode === 13) {
        contagem();
    }
})
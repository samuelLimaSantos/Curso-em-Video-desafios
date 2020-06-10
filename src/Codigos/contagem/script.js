/**Declaração de elementos que serão manipulados */

const button = document.querySelector(".button button");
const inicioElement = document.querySelector("input[name = inicio]");
const fimElement = document.querySelector("input[name = fim]");
const passoElement = document.querySelector("input[name = passo]");
const resultadoContainer = document.querySelector(".resultado");

button.addEventListener("click", () => {
    // validações
    let inicioValue = inicioElement.value;
    let fimValue = fimElement.value;
    let passoValue = passoElement.value;

    if (inicioValue == "" || fimValue == "") {
        resultadoContainer.innerHTML = `Operação inválida! Preencha todos os campos!`;
    } else if (passoValue == 0) {
        alert(`Passo inválido! Considerando passo como 1!`);
        iteracao(inicioValue, fimValue, 1);
    } else {
        iteracao(inicioValue, fimValue, passoValue);
        
    }
    




});


function iteracao(inicio, fim, passo) {
    // Função responsável por fazer a contagem e adicioná-la no resultado
    inicioNumber = Number(inicio);
    fimNumber = Number(fim);
    passoNumber = Number(passo);

    resultadoContainer.innerHTML = `Contando: <br>`;
    
    if (inicioNumber > fimNumber) {
        for (i = inicioNumber; i >= fimNumber; i -= passoNumber) {
            resultadoContainer.innerHTML += `${i} 👉 `;
        }    
    } else {
        for (i = inicioNumber; i <= fimNumber; i += passoNumber) {
            resultadoContainer.innerHTML += `${i} 👉 `;    
        }
    } 

        resultadoContainer.innerHTML += ` 🏁`;
};

    


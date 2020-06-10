/** Seleciona todos os elementos de tela necessários para realizar o código */
const button = document.querySelector(".input button");
const selectElement = document.querySelector("select[name=table]");
const input = document.querySelector("input[name = numero]");
const result = document.querySelector(".resultado");
let lista = []; // Criação da lista


button.addEventListener("click", () => {
    // Evento para adicionar elementos no array.

    result.innerHTML = ``;
    const inputValue = input.value;
    if (inputValue > 100 || inputValue < 0) {
        alert("Inserir valor entre 0 e 100!");
        return;
    } else if (lista.indexOf(inputValue) > -1){
        // No array não é permitido números repetidos
        alert("Valor já existente no array");
        return;
    } else {
        lista.push(inputValue); // Adiciona o elemento no array caso passe pelas validações
    }

    selectElement.innerHTML += `<option value="${inputValue}">
    Valor ${inputValue} adicionado
    </option>`;
    input.value = ``; 
});


function resultado() {
    // Função responsável por mostrar o resultado
    
    let listaAtualizada = lista.map((item) => Number(item)); // Transforma os arrays em tipo numérico
    const total = listaAtualizada.length;
    let maior;
    let menor;
    

    for (let i = 0; i < total; i++) {
        // Descobre o maior e o menor número do vetor
        if (i === 0) {
            maior = listaAtualizada[i];
            menor = listaAtualizada[i];
        }
        
        if (listaAtualizada[i] > maior) {
            maior = listaAtualizada[i];
        }

        if (listaAtualizada[i] < menor) {
            menor = listaAtualizada[i];
        }
    
    }

    const soma = listaAtualizada.reduce((total, next) => total + next);
    const media = soma / listaAtualizada.length;
        
    result.innerHTML = `
    <p>Ao todo, temos ${total} números cadastrados</p>
    <p>O maior valor informado foi ${maior}</p>
    <p>O menor valor informado foi ${menor}</p>
    <p>Somando todos os valores, temos ${soma}</p>
    <p>A média dos valores digitados é ${media}</p>
    `; 
}

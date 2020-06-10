const button = document.querySelector(".input button");
const selectElement = document.querySelector("select[name=table]");
const input = document.querySelector("input[name = numero]");
const result = document.querySelector(".resultado");
let lista = [];


button.addEventListener("click", () => {
    result.innerHTML = ``;
    const inputValue = input.value;
    if (inputValue > 100 || inputValue < 0) {
        alert("Inserir valor entre 0 e 100!");
        return;
    }

    if (lista.indexOf(inputValue) > -1){
        alert("Valor já existente no array");
        return;
    }


    lista.push(inputValue);
    selectElement.innerHTML += `<option value="${inputValue}">
    Valor ${inputValue} adicionado
    </option>`;
    input.value = ``; 
});


function resultado() {

    const total = lista.length;
    result.innerHTML = `<p>Ao todo, temos ${total} números cadastrados</p>`;
    
    let soma = 0;
    let maior = 0;
    let menor = 0;
    let media = 0;

    for (let i = 0; i < total; i++) {
        if (i === 0) {
            maior = lista[i];
            menor = lista[i];
            console.log("caiu");
        }

        if (lista[i] > maior) {
            maior = lista[i];
        }

        if (lista[i] < menor) {
            menor = lista[i];
        }

        soma += Number(lista[i]);
        

        console.log("opa");
    }

    media = soma / total;

    result.innerHTML += `<p>O maior valor informado foi ${maior}</p>
    <p>O menor valor informado foi ${menor}</p>
    <p>Somando todos os valores, temos ${soma}</p>
    <p>A média dos valores digitados é ${media}</p>
    `;
}

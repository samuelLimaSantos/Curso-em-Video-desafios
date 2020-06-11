function executarForm() {
    const date = new Date();
    const anoAtual = date.getFullYear();
    const anoValue = document.querySelector("input[name = ano]").value;
    const sexo = document.getElementsByName("gender");
    let resultElement = document.querySelector(".resultado");
    
    if (anoValue > anoAtual) {
        alert("Ano inválido");
    } else {
        const idade = anoAtual - anoValue;
        let genero, imagem;
        if (sexo[0].checked) {
            genero = `Homem`;
            if (idade <= 3) {
                imagem = `../../imagens/homembebe.png`
            } else if (idade <= 19) {
                imagem = `../../imagens/homemadolescente.png`
            } else if (idade <= 40) {
                imagem = `../../imagens/homem.png`
            } else {
                imagem = `../../imagens/homemvelho.png`
            }
        } else {
            genero = `Mulher`;
            if (idade <= 3) {
                imagem = `../../imagens/mulherbebe.png`
            } else if (idade <= 19) {
                imagem = `../../imagens/mulheradolescente.png`
            } else if (idade <= 40) {
                imagem = `../../imagens/mulher.png`
            } else {
                imagem = `../../imagens/mulherIdosa.png`
            }
        }
        
        resultElement.innerHTML = `<p>Detectamos ${genero} com ${idade} anos</p> <img src = "${imagem}">`
        //resultado.style.textAlign = "center";
    }


}



function executarForm() {
    let date = new Date();
    let anoAtual = date.getFullYear();
    let ano = document.querySelector("#nascimento");
    
    
    if (ano.value > anoAtual) {
        alert("Ano inválido")
    } else {
        let idade = anoAtual - ano.value;
        let sexo = document.getElementsByName("gender")
        let genero, imagem;
        let resultado = document.querySelector("#resultado");
        if (sexo[0].checked) {
            genero = `Homem`;
            if (idade <= 3) {
                imagem = `imagens/homembebe.png`
            } else if (idade <= 19) {
                imagem = `imagens/homemadolescente.png`
            } else if (idade <= 40) {
                imagem = `imagens/homem.png`
            } else {
                imagem = `imagens/homemvelho.png`
            }
        } else {
            genero = `Mulher`;
            if (idade <= 3) {
                imagem = `imagens/mulherbebe.png`
            } else if (idade <= 19) {
                imagem = `imagens/mulheradolescente.png`
            } else if (idade <= 40) {
                imagem = `imagens/mulher.png`
            } else {
                imagem = `imagens/mulherIdosa.png`
            }
        }
        
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos <br> <img src = "${imagem}">`
        resultado.style.textAlign = "center";
    }


}



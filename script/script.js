const dataNascimento = new Date('2003-04-22');
const dataAtual = new Date();
const idade = dataAtual.getFullYear() - dataNascimento.getFullYear();

document.querySelector('#idade').textContent = idade;

const imagens = document.querySelectorAll('#galeria li img');

function galeriaTrocar(event){
    
    const principal = document.querySelector("#img-principal")
    const clicada = event.currentTarget;
    principal.src = clicada.src;
    principal.alt = clicada.alt;            

}

function galeriaClique(imagem){
    imagem.addEventListener('click', galeriaTrocar);
}

imagens.forEach(galeriaClique);

//CÓDIGO PARA FAZER A GALERIA//
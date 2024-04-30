const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom(idElementoAudio){
    const elemento = document.querySelector(idElementoAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else{
        console.log('Elemento não encontrado ou seletor inválido!')
    }
    
}


for (let index = 0; index < listaDeTeclas.length; index++) {
    const tecla = listaDeTeclas[index];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    
    tecla.onclick = function () {
        tocaSom(idAudio);
    };

    tecla.onkeydown = function  (evento){
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');            
        }
    }

    tecla.onkeyup = function (evento){
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.remove('ativa');            
        }
    }
    
}

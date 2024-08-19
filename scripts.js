alert('SoftWave Teclados é um projeto fictício para desenvolvimento pessoal e estudos');

function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado');
    }
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

//Para
for (let contador = 0; contador < ListaDeTeclas.length; contador++) {

    const tecla = ListaDeTeclas[contador];

    const instrumento = tecla.classList[1];

    //template string
    const idAudio = `#som_${instrumento}`;
    console.log(idAudio);

    tecla.onclick = function () {
       tocaSom(idAudio);
    }

    tecla.onkeydown = function (event) {

        if (event.code === 'Space' || event.code === 'Enter') {
        tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}

document.getElementById('infoBtn').addEventListener('click', function() {
    var balloon = document.getElementById('infoBalloon');
    if (balloon.style.display === 'none' || balloon.style.display === '') {
        balloon.style.display = 'block';
    } else {
        balloon.style.display = 'none';
    }
});
function playSonido(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador=0; contador<listaDeTeclas.length; contador++){
    const tecla=listaDeTeclas[contador];
    const instrumento= listaDeTeclas[contador].classList[1];

    const idAudio= `#sonido_${instrumento}`;
    tecla.onclick=function(){
        playSonido(idAudio);
    };

    tecla.onkeydown = function(evento){
        if (evento.code ==='Space' || evento.code ==='Enter'){ {
            tecla.classList.add('activa')
        }

        console.log(evento.code ==='Space' || evento.code ==='Enter')
    
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('activa')
    }

    contador=contador+1;
}
}
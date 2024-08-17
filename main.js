//Codigo: 217727672
//Declaracion de variables DOM
const limpiar_resultado = document.querySelector('#limpiar_resultado');
const simbolo = document.querySelector('#simbolo');
const numero = document.querySelector('#numero');
const resultado_objetivo = document.querySelector('#resultado_objetivo');

document.addEventListener('DOMContentLoaded', () => {
    formularioConfig(); //Configuracion para cuando se manden los datos
    inpSimboloConfig(); //Configuracion pra detectar que solo se ingrese un caracter en simbolo
    limpiarResultadoConfig(); //Configuracion para limpiar tanto el resultado como los inputs
});

const inpSimboloConfig = () => {
    let simboloActual; //Variabel auxiliar para guardar el caracter y mantener solo 1 caraceter en el input
    const simbolo = document.querySelector('#simbolo'); //Se obtiene la referencia del input simbolo
    simbolo.addEventListener('input', (e) => { //Evento que escucha cada vez que cambia el valor del input
        if(e.target.value.length > 1){ //Valida que no se ingrese mas de 1 caracter y de ser asi se asigna el mismo que estaba
            e.target.value = simboloActual;
        }else{ //En caso de que haya 0 caracteres deja ingresar el caracter
            simboloActual = e.target.value;
        }
    });
}

const formularioConfig = () => {
    const formularioDiagnostico = document.querySelector('#formularioDiagnostico');

    //Cada vez que se mandan los datos del formulario se manda a llamar la funcion dibujarResultado
    formularioDiagnostico.addEventListener('submit', (e) => {
        e.preventDefault(); //Evita que se recargue la pagina
        dibujarResultado(simbolo.value, numero.value);
    })
}

const dibujarResultado = (simbolo, numero) => {
    //Se recibe el simbolo para dibujar y el numero de filas de la piramide
    resultado_objetivo.innerHTML = '';
    for (let fila = 1; fila <= numero; fila++) { //Iteracion por cada fila (numero recibido)
        const li = document.createElement('li'); //Se crea un elemnto li para ingresar N simbolos a dibujar por cada fila
        
        for (let numSimbolo = 0; numSimbolo < 2*fila-1; numSimbolo++) { //Se aplica la regla 2n-1 para que nos de el resultado de 2 simbolos mas que la fila anterior
            li.innerText += ''+simbolo; //Se van concatenando los simbolos para la fila actual
        }

        resultado_objetivo.appendChild(li); //Se ingresa la fila al elemento <ul>
    }
}

const limpiarResultadoConfig = () => {

    //Cuando se presiona el boton limpiar se limpian los inputs y el resultado dibujado
    limpiar_resultado.addEventListener('click', () => {
        simbolo.value = '';
        numero.value = '';
        const li = document.createElement('li');
        li.innerText = ':)';
        resultado_objetivo.innerHTML = '';
        resultado_objetivo.appendChild(li);
    });
}
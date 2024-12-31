let tittulo=document.querySelector('h1');
tittulo.innerHTML='Hora del Desafío'


function clickConsole(){
    alert('El botón fue clicado')
}

function clickPrompt(){
  let respuestaCiudad=prompt('Diga el nombre de una ciudad de brasil')
  alert(`Estuve en ${respuestaCiudad} `)
}

function alertF(){
    alert('Yo amo JS')
}

function suma(){
    let numeroUno=parseInt(prompt('Digite un primer número'))
    let numeroDos=parseInt(prompt('Digite un segundo número'))
    let suma= numeroUno + numeroDos
    alert(`El resultado de ${numeroUno} + ${numeroDos} es ${suma}`)
}
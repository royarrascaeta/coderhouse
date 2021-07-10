let num = prompt("Generador de tablas de multiplicar.\nIngrese un número");

while(!parseInt(num)){
  num = prompt("El valor ingresado no es un número. Por favor ingrese un número.")
}

for(let i = 1; i <= 10; i++){
  alert(`Tabla del ${num}: \n${num} x ${i} = ${num * i}`)
}
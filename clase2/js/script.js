//Quería hacer un ejercicio divertido y salir del típico ejemplo de introducir nombre y edad.
//No pretendo ofender a nadie, el folclore del fútbol argentino está lleno de cargadas, la idea era hacer el ejercicio con una pizca de humor. 😁
//También quise buscarle la vuelta al control de flujo agregando otro prompt en caso de que el primer if no devuelva true y que este tenga su propia evaluación.

let equipo = prompt("¿Es tu equipo el más grande del fútbol argentino? ⚽ \nEscribí el nombre del equipo argentino del que sos hincha y vamos a averiguarlo!");

if(equipo.toLowerCase() == "boca" || equipo.toLowerCase() == "boca juniors"){
  alert("Felicitaciones, sos hincha del más grande del fútbol argentino. 😎")
}else{
  let descensos = prompt("Introduce la cantidad de descensos a segunda división que tuvo tu equipo.\n*Introduce solo números.");
  if(parseInt(descensos) >= 1){
    alert("Que lástima, tu equipo no es el más grande del fútbol argentino. \nLos grandes nunca descienden. 😎")
  }else{
    alert("Bueno, tu equipo nunca descendió pero igual no es el más grande del fútbol argentino. 😁")
  }
}
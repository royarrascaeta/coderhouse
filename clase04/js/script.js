//Simulador de resto-bar virtual
let cuenta = 0,
  comida = 0,
  bebida = 0,
  cantidadBebida = 0,
  cantidadComida = 0,
  propina = 0;

function pedirComida(){
  while(isNaN(comida) || comida == 0 || comida > 4){
    comida = parseInt(prompt(
      "¿Qué le gustaría comer? Introduce el número junto a la opción:\n 1: Pizza ($300), 2: Hamburguesa ($350), 3: Picada ($700), 4: Tostados ($200)"));
    }

  while(isNaN(cantidadComida) || cantidadComida == 0){
    cantidadComida = parseInt(prompt("Introduzca la cantidad deseada. (Solo números)"));
  }

  switch (comida) {
    case 1:
      comida = "Pizza ($300)";
      cuenta += (300 * cantidadComida);
      break;
  
    case 2:
      comida = "Hamburguesa ($350)";
      cuenta += (350 * cantidadComida);
      break;
  
    case 3:
      comida = "Picada ($700)";
      cuenta += (700 * cantidadComida);
      break;
  
    case 4:
      comida = "Tostados ($200)";
      cuenta += (200 * cantidadComida);
      break;
  }
}

function pedirBebida(){
  while(isNaN(bebida) || bebida == 0 || bebida > 4){
    bebida = parseInt(prompt(
    "¿Qué le gustaría beber? Introduce el número junto a la opción:\n 1: Gaseosa ($150), 2: Agua ($100), 3: Cerveza ($230), 4: Vino ($400)"));
  
    console.log("Bebida: " + bebida);
  }

  while(isNaN(cantidadBebida) || cantidadBebida == 0){
    cantidadBebida = parseInt(prompt("Introduzca la cantidad deseada. (Solo números)"));
  
    console.log("Cantidad: " + cantidadBebida)
  }

  if(cantidadBebida){
    switch (bebida) {
      case 1:
        bebida = "Gaseosa ($150)";
        cuenta += (150 * cantidadBebida);
        break;
    
      case 2:
        bebida = "Agua ($100)";
        cuenta += (100 * cantidadBebida);
        break;
    
      case 3:
        bebida = "Cerveza ($230)";
        cuenta += (230 * cantidadBebida);
        break;
    
      case 4:
        bebida = "Vino ($400)";
        cuenta += (400 * cantidadBebida);
        break;
    }
  }
}

function darPropina(){
  propina = confirm("¿Te gustaría dejar el 10% de propina?");

  if(propina){
    propina = cuenta*0.10;
    cuenta += propina;
  }else{
    propina = 0;
  }
}

alert("Bienvenido al resto-bar!");
pedirComida();
pedirBebida();
darPropina();

alert(`
Detalle de la cuenta:

- ${cantidadComida} x ${comida}
- ${cantidadBebida} x ${bebida}
- Propina: $${propina}

Total = $${cuenta}
`)
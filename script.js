//MANEJO Y VENTA DE CALZADOS: Se calcula monto a pagar y se actualiza el stock de la tienda.
//CLASE CONSTRUCTORA Calzado CREADORA DE OBJETOS (los llamaremos calzadoX)
class Calzado{
    constructor (id, categoria, marca, modelo, talle, precio, cantidad, imagen){
        this.id = id;
        this.categoria = categoria; //Se va a usar en un futuro para filtrar (Hombre, Mujer, Niño).
        this.marca = marca.toUpperCase();
        this.modelo = modelo.toUpperCase();
        this.talle = parseInt(talle);
        this.precio = parseFloat(precio);
        this.cantidad = parseInt(cantidad);
        this.imagen = imagen; //url de la imagen
        this.stock = true;
    }
    fixStock() { //MODIFICO PROPIEDADES CANTIDAD Y STOCK DEL OBJETO
        this.cantidad = this.cantidad - 1; //RESTO LA COMPRA
        
        if(this.cantidad <= 0){ //CHEQUEO STOCK
            this.stock = false;
        }
    }
}
//END CLASE CONSTRUCTORA Calzado

//BASE DE DATOS SIMULADA
const calzado1 = new Calzado("1", "Hombre",  "New Balance", "ninja", "40", "3200", "3", "/img/NB-ninja.jpg");
const calzado2 = new Calzado("2", "Hombre", "New Balance", "ninja", "39", "3200", "10", "/img/NB-ninja.jpg");
const calzado3 = new Calzado("3", "nino", "New Balance", "cebra", "41", "3600", "31", "/img/NB-cebra.jpg");
const calzado4 = new Calzado("4", "Mujer", "Puma", "gacele", "38", "2800", "5", "/img/Puma-gacele.jpg");
const calzado5 = new Calzado("5", "Hombre", "Nike", "infinity", "40", "3100", "1", "/img/Nike-infinity.jpg");
//END BASE SIMULADA//

//USUARIO
let idComprado = 0;

function validar(target, max){
  if(target == 0 || target < 0 || target > max || !parseInt(target)){
    return true;
  }
}

//Valido idComprado
while (validar(idComprado, 5)){
    idComprado = parseInt(prompt(
    `Seleccione un modelo de la lista ingresando su id:
    1- New Balnce - ninja  |  talle 40  |  id=1
    2- New Balnce - ninja  |  talle 39  |  id=2
    3- New Balance - cebra  |  talle 41  |  id=3
    4- Puma - gacele  |  talle 38  |  id=4
    5- Nike - infinity  |  talle 40  |  id=5`));
}
let objetoComprado = eval("calzado" + idComprado); //SELECCION DINAMICA (Selecciono objeto seleccionado por usuario)


let cantidadComprada = 0;
//Valido cantidadComprada
while (validar(cantidadComprada, objetoComprado.cantidad)){ 
    if(!objetoComprado.stock){
      alert("El stock de " + objetoComprado.marca + " - " + objetoComprado.modelo + " talle " + objetoComprado.talle + " es de: " + objetoComprado.cantidad + ". Por favor modifique su compra y vuelva a intentarlo.");
    }
    cantidadComprada = parseInt(prompt("¿Cuantos pares lleva?"));
}
//END USUARIO

//CALCULO (Se hacen diferentes cálculos)
//FUNCION VENTA (calculo precio con iva teniendo en cuenta la cantidad de compra, bajo el stock la cantidad de compra, admito venta si la compra es menor o igual al stock y si además hay stock)
function venta(){ 
    for (var i = 0; i < cantidadComprada; i++) { //Arregla el stock (le resta lo que compró) **ESTO SE DEBERÍA HACER DESPUES DE CHEQUEAR QUE EL USUARIO PAGÓ**
        objetoComprado.fixStock(); 
    }
    
    let montoTotal = objetoComprado.precio * cantidadComprada * 1.22; 
    return montoTotal;
};
let totalSinDescuento = venta();
//END CALCULO

//USUARIO
let cuponDescuento = prompt("Otorgamos descuentos de hasta el 50% de su valor de compra. ¿Cual es el % de desuento de su cupón?");
//Valido cuponDescuento
while (cuponDescuento < 0 || cuponDescuento > 50 || cuponDescuento.length === 0 || cuponDescuento == null || !parseInt(cuponDescuento)){ //Pongo máximo de descuento y demás validaciones.
    cuponDescuento = prompt("No podemos otorgar ese descuento. El descuento mayor es de 50% ¿Cual es el % de desuento de su cupón?");
}
//END USUARIO

//CALCULO (Se hacen diferentes cálculos)
function pago(){
    //DESCUENTO
    cuponDescuento = (100 - parseInt(cuponDescuento))/100;
    let pagoConDescuento = totalSinDescuento * cuponDescuento;

    //USUARIO * (Me gustaría sacarlo de la función para que quede más claro el código pero debería calcular el pago sin descuento antes, ¿Moolesta que vaya acá?)
    let cuotas = prompt("Debe pagar $" + Math.round(pagoConDescuento) +". Ingrese la cantidad de cuotas. El máximo de cuotas es 10");
    //Valido cuotas
    while (cuotas < 0 || cuotas > 10 || cuotas.length === 0 || cuotas == null || !parseInt(cuotas)){
        cuotas = prompt("Debe pagar $" + Math.round(pagoConDescuento) +". Ingrese la cantidad de cuotas. El máximo de cuotas es 10");
    }
    let pagoTotal, pagoCuotas;
    //END USUARIO

    //Devuelvo valores en array
    return [pagoTotal, cuotas, pagoCuotas] = [(totalSinDescuento * cuponDescuento), cuotas, ((totalSinDescuento * cuponDescuento)/cuotas)]
};
let aPagar = pago(); // Respuesta de funcion pago. Devuelve un array.
//END CALCULO

//INFO PARA EL USUARIO
alert("USTED ESTÁ COMPRANDO: \nCalzado: " + objetoComprado.marca + " - " + objetoComprado.modelo + "\nCantidad: " + cantidadComprada  + "\n-------------\nSu descuento es del: " + (100-(cuponDescuento*100)) + "%\n-------------\nDebe pagar: $" + Math.round(aPagar[0]) + "\nCuotas: " + aPagar[1] + "\nPago Mensual: $" + Math.round(aPagar[2]));
//Muestra como quedo el objeto modificado luego de la compra por consola ya que este valor es relevante solo para la tienda.
console.log(objetoComprado); 


//**LAS VALIDACIONES LAS VEO MUY REPETITIVAS/

// while (variable < 0 || variable > 50 || variable.length === 0 || variable == null || !parseInt(variable)){ 
//     variable = prompt("Vuelvo a pedir que ingrese valor");
// }

//**¿SE PODRÍA CREAR UNA FUNCION PARA HACER ESTO? NO SON TODOS EXACTAMENTE IGUALES PERO HACIENDO ESTO LOGRARÍA REDUCIR EL CÓDIGO UN MONTÓN */

//Tienda de productos
//Base de datos simulada
const productos = [
  {
    "id": 1,
    "nombre": "Zapatillas",
    "precio": 5000
  },
  {
    "id": 2,
    "nombre": "Camisa",
    "precio": 1800
  },
  {
    "id": 3,
    "nombre": "Pantalón",
    "precio": 2000
  },
  {
    "id": 4,
    "nombre": "Campera",
    "precio": 7300
  }
]

//Creación de nueva clase y sus métodos
class Carrito{
  constructor(){
    this.productos = [],
    this.envio = 0,
    this.subTotal = 0,
    this.total = 0
  }

  mostrarProductos(){
    let detalle = "";
    for(let producto of this.productos){
      detalle += `- ${producto.nombre} ($${producto.precio}) x ${producto.cantidad}\n`
    }
    return detalle.trim();
  }

  calcularSubtotal(){
    for(let producto of this.productos){
      this.subTotal += producto.precio * producto.cantidad;
    }
  }
  
  calcularIVA(){
    return this.subTotal * 0.21;
  }
  
  consultaEnvio(){
    return confirm("Detalle del pedido: \n" + this.mostrarProductos() + "\n\n¿Desea que le enviemos el producto a domicilio?") ? this.calcularEnvio() : this.envio = 0;
  }

  calcularEnvio(){
    if(this.subTotal >= 5000){
      alert("Felicitaciones! Su compra supera los $5000 y por ello tenes el envío bonificado!")
      this.envio = 0;
    }else{
      this.envio = 650;
    }
  }

  calcularTotal(){
    this.total = this.subTotal + this.envio + this.calcularIVA();
  }
}


//Creación de nueva instancia de la clase
const carrito1 = new Carrito();


//Creación de función que agregar productos al carrito
function agregarAlCarrito(){
  let idProducto = 0,
      cantidadProducto = 0;
  
  //Entrada de datos, id del producto a comprar
  while(!idProducto || idProducto <= 0 || idProducto > 4){
    idProducto = parseInt(prompt(
      `¿Qué producto desea comprar? Introduzca el número junto al nombre del producto:
      - ${productos[0].id}: ${productos[0].nombre} ($${productos[0].precio})
      - ${productos[1].id}: ${productos[1].nombre} ($${productos[1].precio})
      - ${productos[2].id}: ${productos[2].nombre} ($${productos[2].precio})
      - ${productos[3].id}: ${productos[3].nombre} ($${productos[3].precio})`))
  }

  //Seleccionamos el producto de la base de datos y lo guardamos en una variable
  let productoElegido = productos.find(el=> el.id == idProducto);

  //Entrada de datos, cantidad del producto a comprar
  while(!cantidadProducto || cantidadProducto <= 0){
    cantidadProducto = parseInt(prompt("Producto elegido: " + productoElegido.nombre + "\nIntroduzca la cantidad deseada. (Solo números)"));
  }

  //Agrego el nuevo producto al arreglo productos del carrito
  let indice = carrito1.productos.findIndex(el=>el.nombre == productoElegido.nombre);

  if(indice != -1){
    carrito1.productos[indice].cantidad += cantidadProducto
  }else{
    carrito1.productos.push({"nombre": productoElegido.nombre, "precio": productoElegido.precio, "cantidad":cantidadProducto});
  }
  
  if(confirm("¿Desea agregar otro producto?")){
    agregarAlCarrito()
  }
}

//Ejecución del programa
//Está dentro de un setTimeOut para que pueda cargar el contenido visual antes de que aparezca el primer alert
setTimeout(() => {
  alert("Bienvenido/a a la tienda!");
  
  agregarAlCarrito();
  
  //Llamada a métodos de la clase
  carrito1.calcularSubtotal();
  carrito1.calcularIVA();
  carrito1.consultaEnvio();
  carrito1.calcularTotal();
  
  //Muestra de los datos en pantalla
  alert(`
  Detalle del pedido:
  ${carrito1.mostrarProductos()}
  ----------
  - Subtotal: $${carrito1.subTotal}
  ----------
  - IVA 21%: $${carrito1.calcularIVA()}
  - Costo de envío: $${carrito1.envio}
  ========
  - TOTAL = $${carrito1.total}
  `);
}, 1000);

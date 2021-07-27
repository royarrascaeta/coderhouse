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
class Pedido{
  constructor(producto, precio, cantidad){
    this.producto = producto,
    this.precio = precio,
    this.cantidad = cantidad,
    this.envio = 0,
    this.subTotal = 0,
    this.total = 0
  }

  calcularSubtotal(){
    this.subTotal = this.precio * this.cantidad;
  }
  
  calcularIVA(){
    return this.subTotal * 0.21;
  }
  
  consultaEnvio(){
    return confirm("Producto elegido: " + this.producto + " x " + this.cantidad + "\n¿Desea que le enviemos el producto a domicilio?") ? pedido.calcularEnvio() : this.envio = 0;
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

//Creación de función que retorna la nueva instancia
function pedidoProducto(){
  let idProducto = 0,
      cantidadProducto = 0;
  
  //Entrada de datos, id del producto a comprar
  while(!idProducto || idProducto <= 0 || idProducto > 4){
    idProducto = parseInt(prompt(
      `¿Qué producto desea comprar? Introduzca el número junto al nombre del producto:"
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

  //Retorno de la función, una nueva instancia de la clase Pedido
  return new Pedido(productoElegido.nombre, productoElegido.precio, cantidadProducto)
}

//Ejecución del programa
alert("Bienvenido/a a la tienda!");

//Creación de nueva instancia de la clase
const pedido = pedidoProducto();

//Llamada a métodos de la clase
pedido.calcularSubtotal();
pedido.calcularIVA();
pedido.consultaEnvio();
pedido.calcularTotal();

//Muestra de los datos en pantalla
alert(`
Detalle del pedido:

- ${pedido.producto} x ${pedido.cantidad}: $${pedido.precio * pedido.cantidad}
- IVA 21%: $${pedido.calcularIVA()}
- Costo de envío: $${pedido.envio}

Total = $${pedido.total}
`)

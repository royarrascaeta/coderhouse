//Tienda de productos

//Inicialización de variables que se le pasaran al objeto
let producto = 0,
  cantidadProducto = 0,
  precio = 0;

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
  while(!producto || producto == 0 || producto > 4){
    producto = parseInt(prompt(
      "¿Qué producto desea comprar?:\n 1: Zapatillas ($5000) \n 2: Camisa ($1800) \n 3: Pantalón ($2000)\n 4: Campera ($7300)"));
    }

    switch (producto) {
      case 1:
        producto = "Zapatillas";
        precio = 5000;
        break;
        
        case 2:
          producto = "Camisa";
          precio = 1800;
          break;
          
          case 3:
            producto = "Pantalón";
      precio = 2000;
      break;
  
      case 4:
        producto = "Campera";
        precio = 7300;
        break;
      }
    
      while(!cantidadProducto || cantidadProducto == 0){
      cantidadProducto = parseInt(prompt("Producto elegido: " + producto + "\nIntroduzca la cantidad deseada. (Solo números)"));
    }

  return new Pedido(producto, precio, cantidadProducto)
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
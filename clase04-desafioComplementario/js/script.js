function calcularEnvio(precio){
  if(precio > 3000){
    return 200;
  }else{
    return 400;
  }
}

function calcularIva(precio, impuesto){
  return precio * impuesto;
}

function sumarTotal(precio, impuesto, envio){
  return precio + impuesto + envio;
}

function comprarProducto(){
  let producto = prompt("Introduce el nombre del producto: (Por ej: Zapatillas)");
  
  let precio = parseInt(prompt("Introduce el precio del producto. Ingresa solo números"));

  if(producto && precio){
    let envio = confirm("¿Desea que enviemos los productos a su domicilio?");
    
    let iva = calcularIva(precio, 0.21);
  
    if(envio){
      envio = calcularEnvio(precio);
    }else{
      envio = 0;
    }
  
    alert(
      "Detalle de la compra:\n\n" +
      "Producto: " + producto + "\n" +
      "Subtotal: $" +precio + "\n" +
      "Envío: $" + envio + "\n" +
      "IVA: $" + iva + "\n\n" +
      "Total: $" + sumarTotal(precio, iva, envio)
    )
  }else{
    comprarProducto();
  }
  
}

comprarProducto();


const validator = {
  // ...
  maskify: (tarjeta) => {
    let numeral = "°";
    let tarjetaEnmascarada = tarjeta.slice(-4)
    if (tarjeta.length > 4) {
      tarjetaEnmascarada = numeral.repeat(tarjeta.length - 4) + tarjeta.slice(-4)
    }
    return tarjetaEnmascarada;
  },
  isValid: (validacion) => {

    //se comienza a numerar el largo de la tarjeta desde cero
    let suma = 0;
    //marca la posición que comienza en 0
    let posicion = 0;
    // parseInt castea el numero de tarjeta que viene declarado como texto a un numero entero 
    let numeroTarjeta = parseInt(validacion)
    // while se ejecuta hasta que numero de tarjeta valga 0, para ello se divide por 10 en cada vuelta hasta que llegue 0
    while (numeroTarjeta != 0) {
      // se le saca el residuo de la division por 10 y este nos entrega el ultimo digito del numero de tarjeta
      let numero = numeroTarjeta % 10;
      // como va de derecha a izquierda contado la posición, la posicion es inversa ejemplo: la posicion 15 pasa a ser posición 0
      if (posicion % 2 != 0) {
        //Se multiplican los pares por dos//
        let multiplica = numero * 2;
        if (multiplica > 9) { //los resultados mayores a 9, se la aplica un toString q los separa y los suma uno con el otro
          let multiplicaString = multiplica.toString();
          multiplica = parseInt(multiplicaString.charAt(0)) + parseInt(multiplicaString.charAt(1));
        }
        suma += multiplica;
        // suma es igual a los numeros en posiciones impares y los numeros en posiciones pares (que tenian dos)
      } else {
        suma += numero;
      }
      numeroTarjeta = parseInt(numeroTarjeta / 10)
      // incrementa la variable posicion en 1 por cada vuelta hasta que se cumpla la condicion del while que valga 0
      posicion++;
    }
    if (suma% 10 == 0) {
      return "VALIDA"
    }
    else {

      return "INVALIDA"
    }
  }
}
export default validator;


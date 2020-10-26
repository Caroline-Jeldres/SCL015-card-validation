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

    let retorno = false;
    //se comienza a numerar el largo de la tarjeta desde cero
    let suma = 0;
    //Se crea un for que recorre el largo de la numero de la tarjeta obteniendo un numero en cada posicion//
    for (let i = 0; i < validacion.length; i++) {
      //se obtiene un nuemro en la posicion i de la cadena del numero de tarjeta
      let numero = parseInt(validacion.charAt(i));
      //determina si la variable i contiene un numero par
      if (i % 2 == 0) {
        //Se multiplican los pares por dos//
        let multiplica = numero * 2;
        if (multiplica > 9) { //los resultados mayores a 9, se la aplica un toString q los separa y los suma uno con el otro
          let multiplicaString = multiplica.toString();
          multiplica = parseInt(multiplicaString.charAt(0)) + parseInt(multiplicaString.charAt(1));

        }
        suma = suma + multiplica;

      } else {
        suma = suma + numero;
      }
    }
    //determina si la suma es multiplo de 10 (termina en cero)
    if (suma % 10 == 0) {
      retorno = true;
    }
    if (retorno===true){
      return "<strong>VALIDA"
    }
    else {
      return "<strong>INVALIDA"
    }
    
    }

  }




export default validator;

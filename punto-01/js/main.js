// Funcion encargada de convertir cada caracter en su equivalente en 
// Numero entero, si no existe un equivalente en letra, retornara -1
const converterCharacterToInt = (character) => {
    switch (character) {
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: return -1;
    }
}

// Funcion encargada de recibir el numero en Romano y convertir el numero a entero
const converterNumber = () => {
    // Se llaman los elementos del html, el primero es para traer lo ingeresado por 
    // el usuario.
    // El segundo, es para llamar a la etiqueta label para mostrar el numero.
    const numberRoman = document.querySelector(".numberRoman").value.toUpperCase(),
        numberConverter = document.querySelector("#numberConverter");

    // Se valuda que el numero, que no sea diferente a estring, sino retorna nulo,
    // El usuario no ingreso nada
    if (typeof numberRoman != 'string') {
        return null;
    }

    // Se llam la funcion de para convetir caracter en numero y se le pasa la primera 
    // Posicion, en Javascript las cadenas de texto, son tratadas como arreglos.
    let number = converterCharacterToInt(numberRoman.charAt(0));
    let prev;
    let current;
    let i = 1;

    /*
        * Como se le paso la primera posicion a la funcion de converti Caracter a entero,
        se le asigna la segunda posicion al ciclo y se valida si numberRoman, es 
        meno, si es asi, se llama la funcion de convertir caracter a numero y se le
        pasa la posicion de i, segidamente se le asiga a prev, el numero anterior a i,
        y se valida que este sea menor o igual, para sumarle, sino se le resta, haciendo 
        la respectiva operacion, debido a la regla de numero romanos 
        
        * Si esta antes se resta
        * Si esta despues, se suma.
    */
    while (i < numberRoman.length) {
        current = converterCharacterToInt(numberRoman.charAt(i));
        prev = converterCharacterToInt(numberRoman.charAt(i - 1));
        if (current <= prev) {
            number += current;
        } else {
            number = number - prev * 2 + current;
        }
        i++;
    }

    return  numberConverter.textContent = number;
}
const stringUser = () => {

    const stringUser = document.querySelector("#string").value.toLowerCase()
        numberConsonant = document.querySelector("#numberConsonant");
    let tem = 0;

    stringUser.split('').forEach(element => {
        tem += (element == 'a') ? 0:
                (element == 'e') ? 0 :
                (element == 'i') ? 0 :
                (element == 'o') ? 0 :
                (element == 'u') ? 0 : 1; 
    });

    return numberConsonant.textContent = `El numero de consonante es: ${ tem }`
}
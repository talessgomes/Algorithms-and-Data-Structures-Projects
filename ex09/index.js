function fearNotLetter(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
            return String.fromCharCode(str.charCodeAt(i - 1) + 1);
        }
    }
}

let result = fearNotLetter("bcdf");
console.log(result); // e

/*O código vai verificar qual é a letra que está faltando e vai mostrar na tela */
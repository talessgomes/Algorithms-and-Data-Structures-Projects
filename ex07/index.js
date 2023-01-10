function myReplace(str, before, after) {

    let stringCollection = str.indexOf(before);

    if (str[stringCollection] === str[stringCollection].toUpperCase()) {
        after = after.charAt(0).toUpperCase() + after.slice(1);
    } else {
        after = after.charAt(0).toLowerCase() + after.slice(1);
    }
    // recolocando o str original com o after
    str = str.replace(before, after);

    return str;
}


let result = myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

console.log(result);

/*Vou verificar existe o valor de befora e  se o valor é igual a palavra maiúscula,
se não for, eu vou passar o valor de after minúsculo */
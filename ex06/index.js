function translatePigLatin(str) {
    if (str.match(/^[aeiou]/)) return str + "way";
    // verificando se a palavra começa com uma vogal
    //se começar, o retorno vai ser a palavra + um way no final.

    const consonantCluster = str.match(/^[^aeiou]+/)[0]; //c

    return str.substring(consonantCluster.length) + consonantCluster + "ay";
}

console.log(translatePigLatin("consonant"));

/*A minha verificação vai pegar uma parte da palavra, com o substring e vai
passar o valor onsonant. a minha variável vai conter a minha letra, que é C.
 no final eu vou retornar uma parte da palavra + mais a primeira letra + ay */
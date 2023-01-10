function pairElement(str) {
    const arrDNA = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'A') arrDNA.push([str[i], 'T']);
        if (str[i] === 'T') arrDNA.push([str[i], 'A']);
        if (str[i] === 'C') arrDNA.push([str[i], 'G']);
        if (str[i] === 'G') arrDNA.push([str[i], 'C']);
    }
    return arrDNA;
}

console.log(pairElement("GCG"));

/*Neste exercício eu vou verificar se o parâmetro tem a
letra que eu quero verificar, se ter a letra, eu vou 
dar um push do meu i e outro valor */
function uniteUnique(arr1, arr2, arr3) {

    let newArr = []

    for (let i = 0; i < arguments.length; i++) {

        const arrArguments = arguments[i];
        console.log(arrArguments, 'a');

        for (let j = 0; j < arrArguments.length; j++) {

            let indexValue = arrArguments[j];
            if (newArr.indexOf(indexValue) < 0) {
                newArr.push(indexValue);
            }
        }
    }
    return newArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

/*Vou verificar se existe algum valor dentro meu indexOf,
se existir valor e o valor do meu newArr for menor do que 0.
eu vou adicionar os valores no meu array vazio */
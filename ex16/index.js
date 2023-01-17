function steamrollArray(arr) {
    const newArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            newArray.push(...steamrollArray(arr[i]));
        } else {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
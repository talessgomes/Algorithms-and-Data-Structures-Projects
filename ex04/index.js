function whatIsInAName(collection, source) {
    const souceKeys = Object.keys(source);

    // filter the collection
    return collection.filter(obj => souceKeys
        .map(key => obj.hasOwnProperty(key) && obj[key] === source[key]))
        .reduce((a, b) => a && b);
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
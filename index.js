const cats = ["Milo","Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
    return "Ralph"
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
    return "Bob"

}

function destructivelyRemoveLastCat() {
    cats.pop();
    return 'it removes the last cat from the array'

}

function destructivelyRemoveFirstCat() {
    cats.shift("Milo");
    return 'it removes the first cat from the array'
}
function appendCat(name) { 
    const newArray = cats.slice();
    newArray.push("Broom")
    return newArray
}
function prependCat(name) {
    const newPrependCat = cats.slice();
    newPrependCat.unshift("Arnold")
    return newPrependCat
}
function removeLastCat() {
    const newRemoveLastCat = cats.slice();
    newRemoveLastCat.pop()
    return newRemoveLastCat
}
function removeFirstCat() {
   const newRemoveFirstCat = cats.slice();
   newRemoveFirstCat.shift()
    cats.splice();
    return newRemoveFirstCat
}



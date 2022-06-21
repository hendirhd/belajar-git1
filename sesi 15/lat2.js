function urutHuruf(abjad) {
    return [...abjad].sort((a, b) => a.localeCompare(b)).join("");
}

function urutHurufUsingSplit(abjad) {
    return abjad.split("").sort((a, b) => a.localeCompare(b)).join("");
}

const abjad = "halo" //ahlo
// const abjad = "qwertyuiopasdfghjklzxcvbnm"; //abcdefghijklmnopqrstu//
// const abjad = "qwerty"// //eqrtwy

console.log("tulisan awal    : " + abjad);
console.log("hasil urutan    : " + urutHuruf(abjad));

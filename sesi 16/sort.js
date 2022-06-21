var numArray = [27, 38, 4, 43, 9, 82, 10];
for (var i = 0; i < numArray.length - 1; i++) {
    var min = i;
    for (var j = i + 1; j < numArray.length; j++) {
        if (numArray[j] < numArray[min]) {
            min = j;
        }
    }
    if (min != i) {
        var target = numArray[i];
        numArray[i] = numArray[min];
        numArray[min] = target;
    }
}
console.log("sebelum diurutkan = " + [27, 38, 4, 43, 9, 82, 10]);

console.log("setelah diurutkan = " + numArray);
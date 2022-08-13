var arr = [1, 3, 45, 6, 5, 2]

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Sum of Array
var sum = 0
for (var i = 0; i < arr.length; i++) {

    sum += arr[i]
}
console.log("Sum is: " + sum);


// increase array item 2

for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + 3
}

console.log("Update array: " + arr);

// find ood number

for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
        console.log("Odd Number: " +
            arr[i] + " ");
    }
}

// find Even NUmber

for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log("Even Number : " +
            arr[i] + " ");
    }
}
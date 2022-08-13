// function test() {
//     for (var i = 0; i < arguments.length; i++) {
//         console.log((arguments[i]))
//     }
// }

// test(1, 5, 3)



// function test() {
//     console.log(arguments);
// }

// test(3, 2, 1)




var sum = 0

function xc(a, b, c) {
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log(sum);
}

xc(9, 2, 3)
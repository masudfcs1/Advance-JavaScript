// First Class Function

function add(a, b) {
    return a + b
}

// 1. A Function can be Stored in a Variable
var sum = add
console.log(sum(4, 5))
console.log(typeof sum)

// 2. A Function can be Stored in an Array
var arr = []
arr.push(add)
console.log(arr)
console.log(arr[0](5, 3))

// 3. A Function can be Stored in an Object
var obj = {
    sum: add
}

console.log(obj)
console.log(obj.sum(7, 9))

// 4. We can Create Function as Need
setTimeout(function() {
    console.log('I have created...')
}, 100)
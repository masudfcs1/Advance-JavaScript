var obj = {
    x: 10,
    y: 20,
    z: 30
}

// console.log(obj.x);

// console.log(obj.z);

// console.log(obj['y']);

// var tt = 'x'
// console.log(obj[tt]);

obj.x = 33
console.log(obj);

obj['y'] = 22
console.log(obj);

var tt = 'z'
obj[tt] = 55
console.log(obj);
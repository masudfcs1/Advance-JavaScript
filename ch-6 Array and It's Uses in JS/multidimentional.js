var arr = [
    [2, 4, 6, 8],
    [5, 3, 5, 2],
    [2, 4, 6, 3]
]

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        console.log("Element " + i + " index:" + arr[i][j]);
    }
}
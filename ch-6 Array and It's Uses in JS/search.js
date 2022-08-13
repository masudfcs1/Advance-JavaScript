var arr = [2, 4, 5, 7, 9, 22, 41]

var sr = 22
var bol = false

for (var i = 0; i < arr.length; i++) {
    if (arr[i] == sr) {
        console.log("Search Item here.index number is: " + i);
        bol = true
        break;
    }
}

if (!bol) {
    console.log("Not Found This item");
}
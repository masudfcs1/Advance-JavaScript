function inner(wish, name) {
    function inner1() {
        if (' ') {
            return name.split(' ')[1]
        } else
            return " "

    }
    let message = wish + " " + inner1();
    console.log(message);
}


inner("Good Mornning", "Masud Rana")
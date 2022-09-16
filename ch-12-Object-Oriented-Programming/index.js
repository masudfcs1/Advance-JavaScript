const react = {
    height: 130,
    weight: 70,

    draw: function() {
        console.log('Never Give Up.');
        this.printanother()

    },
    printanother: function() {
        console.log('Talk About Height ' + this.height);
        console.log('Talk About Weight ' + this.weight);
    }


}

react.draw()
react.weight = 80
react.draw()

anotherobj = {
    weight: 10,
    height: 20,
    print: react.printanother

}

anotherobj.print()

anotherobj.weight = 80
anotherobj.print()
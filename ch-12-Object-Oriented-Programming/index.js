const react = {
    height: 130,
    weight: 70,

    draw: function() {
        console.log('Never Give Up.');
        this.propartice()
        console.log(this);

    },

    propartice: function() {
        console.log('Talk About Height ' + this.height);
        console.log('Talk About Weight ' + this.weight);
    }


}

react.draw()
react.weight = 80
react.draw()


var another = {
    weight: 10,
    height: 20,
    print: react.propartice
}

another.print()
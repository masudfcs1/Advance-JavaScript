const Rectangle = function(height, weight) {

    this.hteight = height,
        this.weight = weight,

        this.draw = function() {
            console.log('Never Give Up.');
            this.printanother()

        },
        this.printanother = function() {
            console.log('Talk About Height ' + this.hteight);
            console.log('Talk About Weight ' + this.weight);
        }


}
var ract1 = new Rectangle(10, 20);
ract1.draw()
var ract1 = new Rectangle(30, 40);
ract1.draw()
var ract1 = createreact(50, 60);
ract1.draw()
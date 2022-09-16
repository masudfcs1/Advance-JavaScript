const Rectangle = function(height, weight) {

    this.height = height,
        this.weight = weight,

        this.draw = function() {
            console.log('Never Give Up.');
            this.printanother()

        },
        this.printanother = function() {
            console.log('Talk About Height ' + this.height);
            console.log('Talk About Weight ' + this.weight);
        }


}
var ract1 = createreact(10, 20);
ract1.draw()
var ract1 = createreact(30, 40);
ract1.draw()
var ract1 = createreact(50, 60);
ract1.draw()
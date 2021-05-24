class Ball extends BaseClass {
    constructor(x,y) {
        super(x,y,50,50) 
        var options = {
            isStatic:false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
    }
   
}


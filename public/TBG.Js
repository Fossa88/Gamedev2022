var canvas = document.getElementById("canvas");
var context1 = canvas.getContext("2d");
var context = canvas.getContext("2d");

var wh = window.innerHeight;
var ww = window.innerWidth; 

canvas.width = ww;
canvas.height = wh;
canvas.style.background = "#00000";

var bwidth = ww
var bheight = wh
var pad = 0

    for (var bruh = 0; bruh <= bwidth; bruh += 40) {
        context1.moveTo(0.5 + bruh + pad, pad);
        context.lineTo(0.5 + bruh + pad, bheight + pad);
    }

    for (var bruh = 0; bruh <= bheight; bruh += 40) {
        context1.moveTo(pad, 0.5 + bruh + pad);
        context1.lineTo(bwidth + pad, 0.5 + bruh + pad);
    }
    context1.strokeStyle = "rgb(0, 0, 0, 0.3";
    context1.stroke();

class PistolTower {
    constructor(Xpos, Ypos, Radius, Colour) {
        this.Xpos = Xpos;
        this.Ypos = Ypos;
        this.Radius = Radius;
        this.Colour = Colour;
    }
    draw(context) {
        context.beginPath();
        context.strokeStyle = "rgb(0, 0, 0, 1)"
        context.linewidth = 5;
        context.arc(this.Xpos, this.Ypos, this.Radius, 0, Math.PI * 8, false)
        context.stroke();
        context.closePath();
    }
}

    // Pistol Towers
let myPistolTower = new PistolTower(100, 100, 50, "red");
let myPistolTower2 = new PistolTower(200, 200, 100, "red");

myPistolTower.draw(context);
myPistolTower2.draw(context);
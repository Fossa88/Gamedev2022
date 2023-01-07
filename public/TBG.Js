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
    context1.strokeStyle = "rgb(0, 0, 0, 0.3)";
    context1.stroke();
    // Enemies
    class lilgoon {
        constructor(Xpos, Ypos, Radius) {
            this.Xpos = Xpos;
            this.Ypos = Ypos;
            this.Radius = Radius;
        }
        draw(context) {
            context.beginPath();
            context.strokeStyle = "rgb(0, 0, 0, 1)"
            context.linewidth = 2;
            context.arc(this.Xpos, this.Ypos, this.Radius, 0, Math.PI * 3, false)
            context.fillStyle = 'pink';
            context.fill();
            context.stroke();
            context.closePath();
        }
    }
    // Lil Goons
    let mylilgoon = new lilgoon(200, 200, 12,);

    mylilgoon.draw(context);
    // Towers
    class Core {
        constructor(Xpos, Ypos, Width, Height) {
            this.Xpos = Xpos;
            this.Ypos = Ypos;
            this.Width = Width;
            this.Height = Height;
        }
        draw(context) {
            context.beginPath();
            context.strokeStyle = "rgb(0, 0, 0, 1)"
            context.linewidth = 2;
            context.rect(this.Xpos, this.Ypos, this.Width, this.Height);
            context.fillStyle = 'blue';
            context.fill();
            context.stroke();
            context.closePath();
        }
    }

    // Core Towers
    let myCore = new Core(281.7, 281.7, 78, 78);

    myCore.draw(context);

class PistolTower {
    constructor(Xpos, Ypos, Radius,) {
        this.Xpos = Xpos;
        this.Ypos = Ypos;
        this.Radius = Radius;
    }
    draw(context) {
        context.beginPath();
        context.strokeStyle = "rgb(0, 0, 0, 1)"
        context.linewidth = 5;
        context.arc(this.Xpos, this.Ypos, this.Radius, Math.PI * 8, false)
        context.fillStyle = 'green';
        context.fill();
        context.stroke();
        context.closePath();
    }
}

    // Pistol Towers
let myPistolTower = new PistolTower(100, 100, 20,);
let myPistolTower2 = new PistolTower(200, 100, 20,);

myPistolTower.draw(context);
myPistolTower2.draw(context);

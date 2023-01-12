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
var TowerNum = 0
var CoreCheck = 0
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

    // Basic stuff
    canvas.addEventListener('click', (event) => {
        const rect = canvas.getBoundingClientRect();
        const Xmousepos1 = event.clientX - rect.left;
        const Ymousepos1 = event.clientY - rect.top;
        let Xmousepos = Math.round(Xmousepos1, 40)
        let Ymousepos = Math.round(Ymousepos1, 40)
        console.log('X1: ' + Xmousepos1 + ' Y1: ' + Ymousepos1);
        console.log('X2: ' + Xmousepos + ' Y2: ' + Ymousepos);
        console.log(TowerNum);
        ObjPlace();
    });

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
    class Wall {
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
            context.fillStyle = 'black';
            context.fill();
            context.stroke();
            context.closePath();
        }
    }


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

// Object place function
function ObjPlace () {
    if (TowerNum == 1) { 
        if (CoreCheck == 0) {
        CoreCheck = 1
        const rect = canvas.getBoundingClientRect();
        const Xmousepos1 = event.clientX - rect.left;
        const Ymousepos1 = event.clientY - rect.top;
        let Xmousepos = Math.round(Xmousepos1, 40)
        let Ymousepos = Math.round(Ymousepos1, 40)
        let myCore = new Core(Xmousepos, Ymousepos, 80, 80);
        myCore.draw(context);
        }
    };

    if (TowerNum == 2) {
        const rect = canvas.getBoundingClientRect();
        const Xmousepos1 = event.clientX - rect.left;
        const Ymousepos1 = event.clientY - rect.top;
        let Xmousepos = Math.round(Xmousepos1, 40)
        let Ymousepos = Math.round(Ymousepos1, 40)
        let myWall = new Wall(Xmousepos, Ymousepos, 40, 40);
        myWall.draw(context);
    };

    if (TowerNum == 3) {
        const rect = canvas.getBoundingClientRect();
        const Xmousepos1 = event.clientX - rect.left;
        const Ymousepos1 = event.clientY - rect.top;
        let Xmousepos = Math.round(Xmousepos1, 40)
        let Ymousepos = Math.round(Ymousepos1, 40)
        let myPistolTower = new PistolTower(Xmousepos, Ymousepos, 20);
        myPistolTower.draw(context);
    }
}

'use strict';

(() => {

class EarthDrawer {
  constructor(canvas) {
    this.ctx = canvas.getContext('2d');
    this.width = canvas.width;
    this.height = canvas.height;
  }

  draw(angle, func) {
    this.ctx.save();
    this.ctx.translate(this.width / 2, this.height / 2);
    this.ctx.rotate(Math.PI / 180 * -angle);
    this.ctx.beginPath();
    func(this.ctx);
    this.ctx.stroke();
    this.ctx.restore();
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
}

  class Earth {
    constructor(drawer) {
      this.r = 200;
      this.drawer = drawer;

    }

    drawFace() {
      for (let angle = 0; angle < 360; angle += 7.5) {
        this.drawer.draw(angle, ctx => {
          ctx.moveTo(0, -this.r);
          if (angle % 15 === 0) {
            // ctx.lineWidth = 3;
            ctx.lineTo(0, -this.r + 3);
            ctx.font ='13px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(angle / 15 || 24, 0, -this.r - 10);
          } else {
            ctx.lineTo(0, -this.r + 3);
          }
        });
        
      }
    }

    drawMeridians() {
      // 経度０度
      this.drawer.draw(this.s * 6, ctx => {
        ctx.fillStyle = 'hsl(0, 50%, 50%)';
        ctx.moveTo(0, 0);
        ctx.lineTo(0 * this.r, -1 * this.r);
        ctx.setLineDash([4, 2]);
        ctx.font ='13px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(0, 0 * this.r, -1 * this.r + 10);     
        ctx.lineTo(0.87 * 0 * this.r, 0.87 * -1 * this.r);
        ctx.fillText('+30', 0.87 * 0 * this.r, 0.87 * -1 * this.r + 10);     
        ctx.lineTo(0 * this.r, -1 * this.r);
        ctx.fillText('+60', 0.5 * 0 * this.r, 0.5 * -1 * this.r + 10);     
        ctx.lineTo(0 * this.r, -1 * this.r);
        ctx.fillText('+90', 1 * 0 * this.r, 0 * -1 * this.r + 10);     
      });
      // 東経20度
      this.drawer.draw(this.s * 6, ctx => {
        ctx.fillStyle = 'hsl(20, 50%, 50%)';
        ctx.moveTo(0, 0);
        ctx.lineTo(-0.34 * this.r, -0.94 * this.r);
        ctx.setLineDash([1, 4]);
        ctx.font ='13px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(20, -0.34 * this.r * 0.95, -0.94 * this.r * 0.95);
      });
      // 東経40度
      this.drawer.draw(this.s * 6, ctx => {
        ctx.fillStyle = 'hsl(40, 50%, 50%)';
        ctx.moveTo(0, 0);
        ctx.lineTo(-0.64 * this.r, -0.77 * this.r);
        ctx.setLineDash([1, 4]);
        ctx.font ='13px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(40, -0.64 * this.r * 0.95, -0.77 * this.r * 0.95);
      });
      // 東経60度
      this.drawer.draw(this.s * 6, ctx => {
        ctx.fillStyle = 'hsl(60, 50%, 50%)';
        ctx.moveTo(0, 0);
        ctx.lineTo(-0.87 * this.r, -0.50 * this.r);
        ctx.setLineDash([1, 4]);
        ctx.font ='13px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(60, -0.87 * this.r * 0.95, -0.50 * this.r * 0.95);
      });
      // 東経80度
      this.drawer.draw(this.s * 6, ctx => {
        ctx.fillStyle = 'hsl(80, 50%, 50%)';
        ctx.moveTo(0, 0);
        ctx.lineTo(-0.98 * this.r, -0.17 * this.r);
        ctx.setLineDash([1, 4]);
        ctx.font ='13px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(80, -0.98* this.r * 0.95, -0.17 * this.r * 0.95);
      });
      // 東経100度
      this.drawer.draw(this.s * 6, ctx => {
        ctx.fillStyle = 'hsl(100, 50%, 50%)';
        ctx.moveTo(0, 0);
        ctx.lineTo(-0.98 * this.r, 0.17 * this.r);
        ctx.setLineDash([1, 4]);
        ctx.font ='13px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(100, -0.98* this.r * 0.95, 0.17 * this.r * 0.95);
      });
      // 東経120度
      this.drawer.draw(this.s * 6, ctx => {
        ctx.fillStyle = 'hsl(120, 50%, 50%)';
        ctx.moveTo(0, 0);
        ctx.lineTo(-0.87 * this.r, 0.50 * this.r);
        ctx.setLineDash([1, 4]);
        ctx.font ='13px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(120, -0.87 * this.r * 0.95, 0.50 * this.r * 0.95);
      });
      // 東経135度、北緯35度、日本
      this.drawer.draw(this.s * 6, ctx => {
        ctx.fillStyle = 'color = hsl(135, 50%, 50%)';
        ctx.moveTo(0, 0);
        ctx.lineTo(-0.87 * this.r, 0.50 * this.r);
        ctx.setLineDash([1, 10]);
        ctx.font ='16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('日本', -0.71 * this.r * 0.82, 0.71 * this.r * 0.82 - 10);
      }); 
      // 東経140度
      this.drawer.draw(this.s * 6, ctx => {
        ctx.fillStyle = 'hsl(140, 50%, 50%)';
        ctx.moveTo(0, 0);
        ctx.lineTo(-0.64 * this.r, 0.77 * this.r);
        ctx.setLineDash([1, 4]);
        ctx.font ='13px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(140, -0.64 * this.r * 0.95, 0.77 * this.r * 0.95);
      });
      // 東経160度
      this.drawer.draw(this.s * 6, ctx => {
        ctx.fillStyle = 'hsl(160, 50%, 50%)';
        ctx.moveTo(0, 0);
        ctx.lineTo(-0.34 * this.r, 0.94 * this.r);
        ctx.setLineDash([1, 4]);
        ctx.font ='13px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(160, -0.34 * this.r * 0.95, 0.94 * this.r * 0.95);
      });
      // 経度180度
      this.drawer.draw(this.s * 6, ctx => {
        ctx.fillStyle = 'hsl(180, 50%, 50%)';
        ctx.moveTo(0, 0);
        ctx.lineTo(0 * this.r, 1 * this.r);
        ctx.setLineDash([4, 2]);
        ctx.font ='13px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(180, 0 * this.r * 0.95, 1 * this.r * 0.95);
      });
      // 西経160度
      this.drawer.draw(this.s * 6, ctx => {
        ctx.fillStyle = 'hsl(200, 50%, 50%)';
        ctx.moveTo(0, 0);
        ctx.lineTo(0.34 * this.r, 0.94 * this.r);
        ctx.setLineDash([1, 4]);
        ctx.font ='13px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(-160, 0.34 * this.r * 0.95, 0.94 * this.r * 0.95);
      });
      // 西経140度
      this.drawer.draw(this.s * 6, ctx => {
        ctx.fillStyle = 'hsl(220, 50%, 50%)';
        ctx.moveTo(0, 0);
        ctx.lineTo(0.64 * this.r, 0.77 * this.r);
        ctx.setLineDash([1, 4]);
        ctx.font ='13px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(-140, 0.64 * this.r * 0.95, 0.77 * this.r * 0.95);
      });
      // 西経120度
      this.drawer.draw(this.s * 6, ctx => {
        ctx.fillStyle = 'hsl(240, 50%, 50%)';
        ctx.moveTo(0, 0);
        ctx.lineTo(0.87 * this.r, 0.50 * this.r);
        ctx.setLineDash([1, 4]);
        ctx.font ='13px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(-120, 0.87 * this.r * 0.95, 0.50 * this.r * 0.95);
      });
      // 西経100度
      this.drawer.draw(this.s * 6, ctx => {
        ctx.fillStyle = 'hsl(260, 50%, 50%)';
        ctx.moveTo(0, 0);
        ctx.lineTo(0.98 * this.r, 0.17 * this.r);
        ctx.setLineDash([1, 4]);
        ctx.font ='13px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(-100, 0.98 * this.r * 0.95, 0.17 * this.r * 0.95);
      });
      // 西経80度
      this.drawer.draw(this.s * 6, ctx => {
        ctx.fillStyle = 'hsl(280, 50%, 50%)';
        ctx.moveTo(0, 0);
        ctx.lineTo(0.98 * this.r, -0.17 * this.r);
        ctx.setLineDash([1, 4]);
        ctx.font ='13px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(-80, 0.98 * this.r * 0.95, -0.17 * this.r * 0.95);
      });
      // 西経60度
      this.drawer.draw(this.s * 6, ctx => {
        ctx.fillStyle = 'hsl(300, 50%, 50%)';
        ctx.moveTo(0, 0);
        ctx.lineTo(0.87 * this.r, -0.50 * this.r);
        ctx.setLineDash([1, 4]);
        ctx.font ='13px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(-60, 0.87 * this.r * 0.95, -0.50 * this.r * 0.95);
      });
      // 西経40度
      this.drawer.draw(this.s * 6, ctx => {
        ctx.fillStyle = 'hsl(320, 50%, 50%)';
        ctx.moveTo(0, 0);
        ctx.lineTo(0.64 * this.r, -0.77 * this.r);
        ctx.setLineDash([1, 4]);
        ctx.font ='13px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(-40, 0.64 * this.r * 0.95, -0.77 * this.r * 0.95);
      });
      // 西経20度
      this.drawer.draw(this.s * 6, ctx => {
        ctx.fillStyle = 'hsl(340, 50%, 50%)';
        ctx.moveTo(0, 0);
        ctx.lineTo(0.34 * this.r, -0.94 * this.r);
        ctx.setLineDash([1, 4]);
        ctx.font ='13px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(-20, 0.34 * this.r * 0.95, -0.94 * this.r * 0.95);
      });
      // 北緯0度
      this.drawer.draw(this.s * 6, ctx => {
        ctx.fillStyle = 'hsl(0, 50%, 50%)';
        // ctx.moveTo(0, 0.87);
        ctx.arc(0, 0, 1 * this.r, 0, 2 * Math.PI);
        ctx.setLineDash([1, 4]);
        ctx.font ='13px Arial';
        ctx.textAlign = 'center';
      });
      // 北緯30度
      this.drawer.draw(this.s * 6, ctx => {
        ctx.fillStyle = 'hsl(0, 50%, 50%)';
        ctx.arc(0, 0, 0.87 * this.r, 0, 2 * Math.PI);
        ctx.setLineDash([1, 4]);
        ctx.font ='13px Arial';
        ctx.textAlign = 'center';
       });
      // 北緯60度
      this.drawer.draw(this.s * 6, ctx => {
        ctx.fillStyle = 'hsl(0, 50%, 50%)';
        // ctx.moveTo(0, 0.87);
        ctx.arc(0, 0, 0.5 * this.r, 0, 2 * Math.PI);
        ctx.setLineDash([1, 4]);
        ctx.font ='13px Arial';
        ctx.textAlign = 'center';
       });
      
    }
    
    update() {
      this.h = (new Date()).getHours();
      this.m = (new Date()).getMinutes();
      this.s = (new Date()).getSeconds();
    }
    
    run() {
      this.update();

      this.drawer.clear();
      this.drawFace();
      this.drawMeridians();

      setTimeout(() => {
        this.run();

      }, 10);
    }
  }

  const canvas = document.querySelector('canvas');
  if (typeof canvas.getContext === 'undefined') {
    return;
  }

  const earth = new Earth(new EarthDrawer(canvas));
  earth.run();
})();

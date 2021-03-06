// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/cXgA1d_E-jY&

function Pipe() {
  this.top = random(height/2);
  this.bottom = random(height/2);
  this.x = width;
  this.w = 50;
  this.speed = 5;

  this.highlight = false;

  this.hits = function(bird) {
    if (bird.y < this.top || bird.bottomY() > height - this.bottom) {
      if (bird.topX() > this.x && bird.x < this.x + this.w) {
        this.highlight = true;
        return true;
      }
    }
    this.highlight = false;
    return false;
  }

  this.show = function() {
      fill(255, 255, 0);
    if (this.highlight) {
      fill(255, 0, 0);
    }
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height-this.bottom, this.w, this.bottom);
  }

  this.update = function() {
    this.x -= this.speed;
  }

  this.offscreen = function() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }


}

var audio = new Audio('music/Hardback.mp3');
audio.addEventListener('ended', function () {
    this.currentTime = 0;
    this.play();
}, false);
audio.play();
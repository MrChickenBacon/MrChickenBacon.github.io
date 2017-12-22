// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/cXgA1d_E-jY&

function Bird() {
    this.y = height / 2;
    this.x = 250;

    this.gravity = 0.6;
    this.lift = -15;
    this.velocity = 0;
    this.height = 50;
    this.width = 50;
    this.bottomY = function () {
        return this.y + this.height;
    }
    this.topX = function () {
        return this.x + this.width;
    }

    this.show = function () {
        image(img, this.x, this.y);

        //fill(255);
        //ellipse(this.x, this.y, 32, 32);
    }

    this.up = function () {
        this.velocity += this.lift;
    }

    this.update = function () {
        this.velocity += this.gravity;
        this.velocity *= 0.9;
        this.y += this.velocity;

        if (this.y > height) {
            this.y = height;
            this.velocity = 0;
        }

        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }

    }

}
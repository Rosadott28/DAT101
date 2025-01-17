"use strict";
import libSprite from "../../common/libs/libSprite.mjs";
import { GameProps } from "./FlappyBird.mjs";

class THero extends libSprite.TSprite {
    constructor (aSpriteCanvas, aSpriteInfo, aPosition, groundY) {
        super(aSpriteCanvas, aSpriteInfo, aPosition);
        this.animateSpeed = 10;
        this.velocity = 0;
        this.gravity = 2;
        this.groundY = groundY;
    }
    draw(){
        super.draw();
    }
    update(){
        //if (this.velocity > 0) {
        //    this.velocity -= this.gravity;
        //}
        //this.posY += this.velocity;
        //this.posY += this.gravity;

        if (this.velocity < 0) {
            this.velocity += 0.75;
        }
        this.posY += this.velocity;
        this.posY += this.gravity;

        if (this.posY > this.groundY) {
            this.posY = this.groundY;
        }

        console.log(this.posY);

        if (this.posY < 0){
            this.posY = 0
        }
    }
    flap(){
        this.velocity = -15;
    }
}

export default THero;
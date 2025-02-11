"use strict";
import lib2d from "../../common/libs/lib2d_v2.mjs";
import libSprite from "../../common/libs/libSprite_v2.mjs";
import { gameProps, EGameStatusType, spawnSequence } from "./SimonSays.mjs";

export class TColorButton extends libSprite.TSpriteButton{
  
  constructor(aSpriteCanvas, aSpriteInfo){
    super(aSpriteCanvas, aSpriteInfo, aSpriteInfo.dst);
    this.sound = null;
    
  }

  //Vi har noe som heter A.P.I.E. (Abstract, Polymorphism, Inheritance, Encapsulation)
  //Vi må løse dette med polymorphism, når musa er over smultringen
  isMouseInside(aPoint){
    //Først sjekker vi om musa er innenfor firkanten som omslutter smultringen
    let isInside = super.isMouseInside(aPoint);
    //Hvis musa er innenfor, sjekk videre om den er utenfor radius 1 og innenfor radius 2
    if(isInside){
      const dx = aPoint.x - gameProps.GameCenter.x;
      const dy = aPoint.y - gameProps.GameCenter.y;
      const dist = Math.hypot(dx, dy); 
      isInside = (dist >= this.spi.dst.r1) && (dist <= this.spi.dst.r2);
    }
    return isInside;
  }

  //Vi må også løse dette med polymorphism, når musa trykkes ned på smultringen
  onMouseDown(){
    this.index = 1;
    this.sound.play();
  }

  onLeave() {
    if (!this.buttons) {
       return;
    }
    this.buttons.forEach(button => button.reset());
 }
 
  //Vi må også løse dette med polymorphism, når musa slippes opp på smultringen
  onMouseUp(){
    if(this.index !== 1) return;
    this.index = 0;
    this.sound.stop();
    if(gameProps.Status !== EGameStatusType.Player){
      return;
    }
    if(gameProps.activeButton === this){
      console.log("Riktig knapp");
      if( gameProps.seqIndex < gameProps.sequence.length - 1){
        gameProps.seqIndex++;
        gameProps.activateButton = gameProps.sequence[ gameProps.seqIndex];
       } else {
        gameProps.spnRound.value++;
        spawnSequence();
        console.log(gameProps.GameSpeed);
      }
        

    }else{
      console.log("Feil knapp");
      gameProps.Status = EGameStatusType.GameOver;
      gameProps.ButtonStartEnd.index = 1;
      gameProps.ButtonStartEnd.visible = true;
    }
  }

}//End of TColorButton class
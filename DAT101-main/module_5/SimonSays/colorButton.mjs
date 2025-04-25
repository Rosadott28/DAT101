"use strict";
import lib2d from "../../common/libs/lib2d_v2.mjs";
import libSprite from "../../common/libs/libSprite_v2.mjs";
import { gameProps, EGameStatusType, spawnSequence } from "./SimonSays.mjs";

export class TColorButton extends libSprite.TSpriteButton{
  constructor(aSpriteCanvas, aSpriteInfo){
    super(aSpriteCanvas, aSpriteInfo, aSpriteInfo.dst);
    this.sound = null;
  }


  isMouseInside(aPoint){
    
    let isInside = super.isMouseInside(aPoint);
    //Hvis musa er innenfor, sjekk videre
    if(isInside){
      const dx = aPoint.x - gameProps.GameCenter.x;
      const dy = aPoint.y - gameProps.GameCenter.y;
      const dist = Math.hypot(dx, dy);
      isInside = (dist >= this.spi.dst.r1) && (dist <= this.spi.dst.r2);
    }
    return isInside;
  }

  onMouseDown(){
    this.index = 1;
    this.sound.play();
  }

  onLeave(aEvent){
    if(aEvent.buttons !== 0){
      this.index = 0;
      this.sound.stop();
    }
  }

  onMouseUp(){
    if(this.index !== 1) return; //Hvis knappen ikke er trykket ned, så gjør ingenting
    this.index = 0;
    this.sound.stop();
    if(gameProps.Status !== EGameStatusType.Player){
      return;
    }
    if(gameProps.activeButton === this){
      console.log("Riktig knapp");
     
      if(gameProps.seqIndex < gameProps.sequence.length - 1){
        gameProps.seqIndex++;
        gameProps.activeButton = gameProps.sequence[gameProps.seqIndex];
      }else{
       
        gameProps.spnRound.value++;
        spawnSequence();
        console.log(gameProps.GameSpeed);
      }

    }else{
      console.log("Feil knapp");
      gameProps.Status = EGameStatusType.GameOver;
      gameProps.buttonStartEnd.index = 1;
      gameProps.buttonStartEnd.visible = true;
    }
  }

}//End of TColorButton class
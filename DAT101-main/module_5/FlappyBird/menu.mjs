"use strict";
import lib2d from "../../common/libs/lib2d.mjs";
import libSprite from "../../common/libs/libSprite.mjs";
import { SpriteInfoList, GameProps, EGameStatus } from "./FlappyBird.mjs";

export class TMenu{
  #spFlappyBird;
  #spButtonPlay;
  #spcvs;
  #activeSprite;
  #spInfoText;
  #spNumber;

  constructor(aSpriteCanvas){
    this.#spcvs = aSpriteCanvas;
    const pos = new lib2d.TPosition(200, 100);

    this.#spFlappyBird = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.flappyBird, pos);
    pos.y = 200;
    pos.x = 230;

    this.#spButtonPlay = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.buttonPlay,pos);
    pos.x = 200;
    pos.y = 100;

    this.#spInfoText = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.buttonPlay,pos);
    pos.x = 285;
    pos.y = 180;

    this.#spNumber = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.buttonPlay,pos);
    this.#spNumber.index = 3; //nedtelling starter på 3

    this.#spcvs.addEventListener("mousemove", this.#onMouseMove);
    this.#spcvs.addEventListener("click", this.#onClick);
    this.#activeSprite = null; 
  }

  draw(){
    switch(GameProps.status){
      case EGameStatus.idle:
        this.#spFlappyBird.draw();
        this.#spButtonPlay.draw();
        break;
        case EGameStatus.getReady:
        this.#spInfoText.draw();
        break;
    }
  }
  #onMouseMove = (aEvent) => {
    const pos = this.#spcvs.getMousePos(aEvent);
    const boundRect = this.#spButtonPlay.boundingBox;
    switch(GameProps.status){
      case EGameStatus.idle:
    if(boundRect.isPositionInside(pos)){
      this.#spcvs.style.cursor = "pointer";
      this.#activeSprite = this.#spButtonPlay;
    }else{
      this.#spcvs.style.cursor = "default";
      this.#activeSprite = null; //Ingen sprite er aktiv
    }
    break;
  }
  };

  #onClick = () =>{
    if(this.#activeSprite === this.#spButtonPlay){
      GameProps.status = EGameStatus.playing;
      this.#spcvs.style.cursor = "default";
      this.#onCountDown();
    }
  };
  
  
  /*  #onCountDown(){
    if(this.#spNumber.index < 0){
      this.#spNumber.index--;
      setTimeout(this.#onCountDown, 1000);
      } else{
        //////vent til han finner ut av det.
      }
    } */
}
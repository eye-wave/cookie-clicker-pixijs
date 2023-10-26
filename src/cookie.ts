import * as PIXI from "pixi.js"

export default class Cookie extends PIXI.Sprite {
  private animationSpeed = 7

  constructor(tex: PIXI.Texture) {
    super(tex)

    this.anchor.set(0.5)
    this.eventMode = "static"
    this.cursor = "pointer"
  }

  public update(dt: number) {
    this.scale.x += ((1 - this.scale.x) / this.animationSpeed) * dt
    this.scale.y += ((1 - this.scale.y) / this.animationSpeed) * dt
  }
}

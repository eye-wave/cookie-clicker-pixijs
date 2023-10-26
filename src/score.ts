import * as PIXI from "pixi.js"

export default class Score extends PIXI.Text {
  constructor() {
    super("", {
      fontFamily: "Arial",
      fontSize: 24,
      fill: 0xffffff,
    })

    this.anchor.set(0.5, 0)
    this.updateScore(0)
  }

  public updateScore(score: number) {
    this.text = `Score: ${score}`
  }
}

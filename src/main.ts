import "./style.css"
import * as PIXI from "pixi.js"
import Cookie from "./cookie"
import Score from "./score"

const app = new PIXI.Application({
  width: 800,
  height: 600,
  background: 0x2167ca,
})

document.body.append(app.view as HTMLCanvasElement)

let SCORE = 0
const scoreText = new Score()
scoreText.position.x = app.view.width / 2

const cookieTexture = PIXI.Texture.from("cookie.webp")
const cookie = new Cookie(cookieTexture)
cookie.position.set(app.view.width / 2, app.view.height / 2)

function updateScore(v = SCORE + 1) {
  SCORE = v
  scoreText.updateScore(v)
}

cookie.on("pointertap", () => {
  updateScore()
  cookie.scale.set(1.1)
})

app.stage.addChild(cookie)
app.stage.addChild(scoreText)

app.ticker.add(dt => {
  cookie.update(dt)
})

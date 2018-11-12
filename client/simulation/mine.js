import {mineConstants} from './constants'

export class Mine {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.r = 5
  }

  /** Display the mine on the field */
  show(p) {
    p.fill(0)
    p.ellipse(this.x, this.y, this.r * 2)

    // Score radius
    p.fill(255, 0, 0, 51.2)
    p.stroke('red')
    p.strokeWeight(2)
    p.ellipse(this.x, this.y, mineConstants.MINE_RADIUS * 2)
    p.noStroke()
  }
}

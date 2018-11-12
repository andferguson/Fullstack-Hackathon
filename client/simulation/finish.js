import {sfConstants} from './constants'

export class Finish {
  constructor() {
    this.x = sfConstants.FINISH_X
    this.y = sfConstants.FINISH_Y
    this.r = 5
  }
  /** Display the finish on the field */
  show(p) {
    p.fill(0)
    p.ellipse(this.x, this.y, this.r * 2)

    // Score radius
    p.fill(0, 255, 0, 51.2)
    p.stroke('green')
    p.strokeWeight(2)
    p.ellipse(this.x, this.y, sfConstants.SF_RADIUS * 2)
    p.noStroke()
  }
}

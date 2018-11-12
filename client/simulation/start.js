import {sfConstants} from './constants'

export class Start {
  constructor() {
    this.x = sfConstants.START_X
    this.y = sfConstants.START_Y
    this.r = 5
  }
  /** Display the finish on the field */
  show(p) {
    p.fill(0)
    p.ellipse(this.x, this.y, this.r * 2)

    // Score radius
    p.fill(0, 0, 255, 51.2)
    p.stroke('blue')
    p.strokeWeight(2)
    p.ellipse(this.x, this.y, sfConstants.SF_RADIUS * 2)
    p.noStroke()
  }
}

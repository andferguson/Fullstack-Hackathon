import {
  playerConstants,
  sfConstants,
  fieldConstants,
  mineConstants
} from './constants'

import {distance, activationColor, angleToPoint} from './helper'

export class Player {
  constructor(genome) {
    this.x = sfConstants.START_X
    this.y = sfConstants.START_Y
    this.vx = 0
    this.vy = 0
    this.r = 5

    this.dead = false
    this.finshed = false

    this.brain = genome
    this.brain.score = 0

    this.nearestMines = []
  }
  /** Update the stats */
  update() {
    if (!this.dead && !this.finshed) {
      const input = this.detect()
      const output = this.brain.activate(input)

      const moveangle = output[0] * 2 * Math.PI

      // Calculate next position
      this.ax = Math.cos(moveangle)
      this.ay = Math.sin(moveangle)
      this.vx += this.ax
      this.vy += this.ay

      // Limit speeds to maximum speed
      this.vx =
        this.vx > playerConstants.MAX_SPEED
          ? playerConstants.MAX_SPEED
          : this.vx < -playerConstants.MAX_SPEED
            ? -playerConstants.MAX_SPEED
            : this.vx
      this.vy =
        this.vy > playerConstants.MAX_SPEED
          ? playerConstants.MAX_SPEED
          : this.vy < -playerConstants.MAX_SPEED
            ? -playerConstants.MAX_SPEED
            : this.vy

      this.x += this.vx
      this.y += this.vy

      // Limit position to width and height
      this.x =
        this.x >= fieldConstants.WIDTH
          ? fieldConstants.WIDTH
          : this.x <= 0 ? 0 : this.x
      this.y =
        this.y >= fieldConstants.HEIGHT
          ? fieldConstants.HEIGHT
          : this.y <= 0 ? 0 : this.y

      if (this.x === 0 || this.x === fieldConstants.WIDTH) this.vx = -this.vx
      if (this.y === 0 || this.y === fieldConstants.HEIGHT) this.vy = -this.vy
    }

    //hit mine?
    for (let i = 0; i < mineConstants.mines.length; i++) {
      var dist = distance(
        this.x,
        this.y,
        mineConstants.mines[i].x,
        mineConstants.mines[i].y
      )
      if (!isNaN(dist) && dist <= mineConstants.MINE_RADIUS) {
        this.dead = true
      }
    }

    //hit wall?
    if (
      this.x <= 0 ||
      this.x >= fieldConstants.WIDTH ||
      this.y <= 0 ||
      this.y >= fieldConstants.HEIGHT
    ) {
      this.dead = true
    }

    //hit target
    var dist = distance(
      this.x,
      this.y,
      sfConstants.FINISH_X,
      sfConstants.FINISH_Y
    )
    if (!isNaN(dist) && dist <= sfConstants.SF_RADIUS) {
      this.finshed = true
    }

    this.score()
  }

  /** Calculate fitness of this players genome **/
  score() {
    const dist = distance(
      this.x,
      this.y,
      sfConstants.FINISH_X,
      sfConstants.FINISH_Y
    )
    if (!isNaN(dist) && !this.dead) {
      if (global.iteration === global.ITERATIONS - 1) {
        this.brain.score += Math.pow(
          global.PROXIMITY_MULTIPLIER * fieldConstants.MAX_DISTANCE / dist,
          global.PROXIMITY_EXPONENT
        )
      } else if (this.finished) {
        this.brain.score *= 10
      } else {
        this.brain.score += global.DURATION_MULTIPLIER
      }
    } else if (
      !isNaN(dist) &&
      this.dead &&
      global.iteration === global.ITERATIONS - 1
    ) {
      this.brain.score /= global.PENALTY_MULTIPLIER
    }

    // Replace highest score to visualise
    global.highestScore =
      this.brain.score > global.highestScore
        ? this.brain.score
        : global.highestScore
  }

  /** Display the player on the field, parts borrowed from the CodingTrain */
  show(p) {
    // Draw a triangle rotated in the direction of velocity
    var angle =
      angleToPoint(this.x, this.y, this.x + this.vx, this.y + this.vy) +
      Math.PI / 2
    let color = activationColor(this.brain.score, global.highestScore)

    p.push()
    p.translate(this.x, this.y)
    p.rotate(angle)
    p.fill(color)
    p.noStroke()
    p.beginShape()
    p.vertex(0, -this.r * 2)
    p.vertex(-this.r, this.r * 2)
    p.vertex(this.r, this.r * 2)
    p.endShape(p.CLOSE)
    p.pop()

    if (!this.dead) {
      p.noFill()
      for (let i = 0; i < this.nearestMines.length; i++) {
        let mine = this.nearestMines[i]
        p.stroke('rgba(0,0,0,0.1)')
        p.line(this.x, this.y, mine.x, mine.y)
      }
    }
  }

  /** Detect nearby mines and the finish around */
  detect() {
    // Detect nearest mines
    const mineDistances = Array.apply(
      null,
      Array(playerConstants.PLAYER_DETECTION)
    ).map(Number.prototype.valueOf, Infinity)

    for (let i = 0; i < mineConstants.mines.length; i++) {
      let dist = distance(
        this.x,
        this.y,
        mineConstants.mines[i].x,
        mineConstants.mines[i].y
      )
      if (dist < playerConstants.DETECTION_RADIUS) {
        // Check if closer than any other object
        let maxNearestDistance = Math.max.apply(null, mineDistances)
        let index = mineDistances.indexOf(maxNearestDistance)

        if (dist < maxNearestDistance) {
          mineDistances[index] = dist
          this.nearestMines[index] = mineConstants.mines[i]
        }
      }
    }

    // Create and normalize input
    let vx = (this.vx + playerConstants.MAX_SPEED) / playerConstants.MAX_SPEED
    let vy = (this.vy + playerConstants.MAX_SPEED) / playerConstants.MAX_SPEED

    //finish stats
    let distToFinish =
      Math.sqrt(this.x, this.y, sfConstants.FINISH_X, sfConstants.FINISH_Y) /
      Math.sqrt(fieldConstants.WIDTH ** 2 + fieldConstants.HEIGHT ** 2)
    let targetAngle =
      angleToPoint(this.x, this.y, sfConstants.FINISH_X, sfConstants.FINISH_Y) /
      (Math.PI * 2)

    // NaN checking
    targetAngle = isNaN(targetAngle) ? 0 : targetAngle
    distToFinish = isNaN(distToFinish) ? 0 : distToFinish

    var leftWall = this.x / fieldConstants.WIDTH
    var topWall = this.y / fieldConstants.HEIGHT

    let output = [leftWall, topWall, vx, vy, targetAngle, distToFinish]

    for (var i = 0; i < playerConstants.PLAYER_DETECTION; i++) {
      let mine = this.nearestMines[i]
      let dist = mineDistances[i]

      if (mine === undefined) {
        output = output.concat([0, 0])
      } else {
        let distToMine =
          Math.sqrt(this.x, this.y, mine.x, mine.y) /
          Math.sqrt(fieldConstants.WIDTH ** 2 + fieldConstants.HEIGHT ** 2)
        var mineAngle =
          angleToPoint(this.x, this.y, mine.x, mine.y) / (Math.PI * 2)

        mineAngle = isNaN(mineAngle) ? 0 : mineAngle
        distToMine = isNaN(distToMine) ? 0 : distToMine

        output = output.concat([mineAngle, distToMine])
      }
    }

    return output
  }
}

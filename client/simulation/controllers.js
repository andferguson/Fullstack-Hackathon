import {initNeat, startEvaluation, endEvaluation} from './main'
import {fieldConstants, mineConstants} from './constants'

import {Finish} from './finish'
import {Start} from './start'
import {Mine} from './mine'

const savePopulation = function() {
  let save = []
  global.neat.population.forEach(net => save.push(net.toJSON()))
  global.savedPopulation = JSON.stringify(save)

  let element = document.getElementById('output')
  element.innerText = global.savedPopulation
}

export const p5Controller = function(p) {
  const finish = new Finish()
  const start = new Start()
  const mines = mineConstants.mines.map(mine => new Mine(mine.x, mine.y))

  p.setup = function() {
    var canvas = p.createCanvas(fieldConstants.WIDTH, fieldConstants.HEIGHT)
    canvas.parent('field')
    canvas.line(15, 25, 70, 90)
    p.frameRate(90)

    initNeat()

    global.iteration = 0
    startEvaluation()
  }

  /*
  Called directly after setup(), the draw() function continuously executes the lines of code contained inside its block until the program is stopped or noLoop() is called
  */
  p.draw = function() {
    p.clear()
    p.squareGrid()

    // Check if evaluation is done
    if (global.iteration === global.ITERATIONS) {
      console.log('END OF GENERATION')
      console.log('global.neat.generation', global.neat.generation)
      console.log('global.TRAINING_GENERATIONS', global.TRAINING_GENERATIONS)
      endEvaluation()
      drawGraph(global.neat.population[0].graph(600, 200), '.draw', false)

      global.neat.generation++

      if (global.neat.generation === global.TRAINING_GENERATIONS) {
        console.log('here!!!!!!!!!!!!')
        savePopulation()
        p.remove()
      } else {
        global.iteration = 0
        startEvaluation()
      }
    }

    finish.show(p)
    start.show(p)

    for (let i = 0; i < global.players.length; i++) {
      global.players[i].update()
      global.players[i].show(p)
    }

    for (let j = 0; j < mines.length; j++) {
      mines[j].show(p)
    }

    global.iteration++
  }

  /** Draw a square grid with grey lines */
  p.squareGrid = function() {
    p.stroke(204, 204, 204, 160)
    p.strokeWeight(1)
    p.fill(255)
    for (var x = 0; x < fieldConstants.WIDTH / 40; x++) {
      p.line(x * 40, 0, x * 40, fieldConstants.HEIGHT)
    }
    for (var y = 0; y < fieldConstants.HEIGHT / 40; y++) {
      p.line(0, y * 40, fieldConstants.WIDTH, y * 40)
    }

    p.line(
      fieldConstants.WIDTH - 1,
      0,
      fieldConstants.WIDTH - 1,
      fieldConstants.HEIGHT
    )
    p.line(
      0,
      fieldConstants.HEIGHT - 1,
      fieldConstants.WIDTH,
      fieldConstants.HEIGHT - 1
    )
    p.noStroke()
  }
}

export const optimizedController = function() {
  initNeat()

  while (global.neat.generation !== global.TRAINING_GENERATIONS) {
    startEvaluation()
    global.iteration = 0

    while (global.iteration !== global.ITERATIONS) {
      for (let i = 0; i < global.players.length; i++) {
        global.players[i].update()
      }
      global.iteration++
    }

    endEvaluation()
    global.neat.generation++
  }
  savePopulation()
}

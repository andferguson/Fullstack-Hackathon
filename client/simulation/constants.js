/** Settings */
const WIDTH = 1200
const HEIGHT = 400
const MAX_DISTANCE = Math.sqrt(WIDTH * WIDTH + HEIGHT * HEIGHT)

const MAX_SPEED = 5
const START_X = 50
const START_Y = HEIGHT * 0.5

const FINISH_X = WIDTH - 50
const FINISH_Y = HEIGHT * 0.5
const SF_RADIUS = 25

const MINE_1_X = WIDTH * 0.2
const MINE_1_Y = HEIGHT * 0.3

const MINE_2_X = WIDTH * 0.6
const MINE_2_Y = HEIGHT * 0.7

const MINE_3_X = WIDTH * 0.4
const MINE_3_Y = HEIGHT * 0.5

const MINE_4_X = WIDTH * 0.2
const MINE_4_Y = HEIGHT * 0.7

const MINE_5_X = WIDTH * 0.6
const MINE_5_Y = HEIGHT * 0.3

const MINE_6_X = WIDTH * 0.4
const MINE_6_Y = HEIGHT * 0.1

const MINE_7_X = WIDTH * 0.4
const MINE_7_Y = HEIGHT * 0.9

const MINE_8_X = WIDTH * 0.8
const MINE_8_Y = HEIGHT * 0.5

const MINE_9_X = WIDTH * 0.8
const MINE_9_Y = HEIGHT * 0.1

const MINE_10_X = WIDTH * 0.8
const MINE_10_Y = HEIGHT * 0.9

const MINE_RADIUS = 50

const DETECTION_RADIUS = 250
const PLAYER_DETECTION = 3

// GA settings
global.PLAYER_AMOUNT = 100
global.ITERATIONS = 300
global.MUTATION_RATE = 0.3
global.ELITISM = Math.round(0.1 * global.PLAYER_AMOUNT)
global.TRAINING_GENERATIONS = 50

global.DURATION_MULTIPLIER = 1
global.PROXIMITY_MULTIPLIER = 150
global.PROXIMITY_EXPONENT = 1
global.PENALTY_MULTIPLIER = 2

/** Global Exports */
const fieldConstants = {WIDTH, HEIGHT, MAX_DISTANCE}

const playerConstants = {
  MAX_SPEED,
  PLAYER_DETECTION,
  DETECTION_RADIUS
}

const sfConstants = {
  START_X,
  START_Y,
  FINISH_X,
  FINISH_Y,
  SF_RADIUS
}

const mineConstants = {
  MINE_RADIUS,
  mines: [
    {x: MINE_1_X, y: MINE_1_Y},
    {x: MINE_2_X, y: MINE_2_Y},
    {x: MINE_3_X, y: MINE_3_Y},
    {x: MINE_4_X, y: MINE_4_Y},
    {x: MINE_5_X, y: MINE_5_Y},
    {x: MINE_6_X, y: MINE_6_Y},
    {x: MINE_7_X, y: MINE_7_Y},
    {x: MINE_8_X, y: MINE_8_Y},
    {x: MINE_9_X, y: MINE_9_Y},
    {x: MINE_10_X, y: MINE_10_Y}
  ]
}

export {fieldConstants, playerConstants, sfConstants, mineConstants}

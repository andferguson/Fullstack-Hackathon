import {playerConstants, sfConstants} from './constants'

import {Player} from './player'

/** Rename vars */
//global definition
var Neat = neataptic.Neat
var Methods = neataptic.Methods
var Config = neataptic.Config
var Architect = neataptic.Architect

/** Turn off warnings */
Config.warnings = false

/** Global vars */
global.players = []
global.iteration = 0
global.highestScore = 0
global.neat = {}

/** Construct the genetic algorithm */
export function initNeat() {
  global.neat = new Neat(
    6 + playerConstants.PLAYER_DETECTION * 2,
    1,
    genome => genome.score,
    {
      mutation: [
        Methods.Mutation.ADD_NODE,
        Methods.Mutation.SUB_NODE,
        Methods.Mutation.ADD_CONN,
        Methods.Mutation.SUB_CONN,
        Methods.Mutation.MOD_WEIGHT,
        Methods.Mutation.MOD_BIAS,
        Methods.Mutation.MOD_ACTIVATION,
        Methods.Mutation.ADD_GATE,
        Methods.Mutation.SUB_GATE,
        Methods.Mutation.ADD_SELF_CONN,
        Methods.Mutation.SUB_SELF_CONN,
        Methods.Mutation.ADD_BACK_CONN,
        Methods.Mutation.SUB_BACK_CONN
      ],
      popsize: global.PLAYER_AMOUNT,
      mutationRate: global.MUTATION_RATE,
      elitism: global.ELITISM,
      fitnessPopulation: true
    }
  )

  global.neat.generation = 0

  if (global.activePopulation.length) {
    let newPop = []
    for (let i = 0; i < global.PLAYER_AMOUNT; i++) {
      let json = global.activePopulation[i % global.activePopulation.length]
      newPop[i] = neataptic.Network.fromJSON(json)
    }
    global.neat.population = newPop
    global.neat.mutate()
  }
}

/** Start the evaluation of the current generation */
export function startEvaluation() {
  global.players = []
  global.highestScore = 0

  for (let i = 0; i < global.PLAYER_AMOUNT; i++) {
    let genome = global.neat.population[i]
    global.players.push(new Player(genome))
  }
}

/** End the evaluation of the current generation */
export function endEvaluation() {
  console.log(
    'Generation:',
    global.neat.generation,
    '- average score:',
    Math.round(global.neat.getAverage())
  )
  console.log('Fittest score:', Math.round(global.neat.getFittest().score))

  //Networks shouldn't get too big
  for (let i = 0; i < global.neat.population; i++) {
    let genome = global.neat.population[i]
    genome.score -= genome.nodes.length * sfConstants.SF_RADIUS / 10
  }

  // Sort the population by score
  global.neat.sort()

  // Init new pop
  let newPopulation = []

  // Elitism
  for (let i = 0; i < global.neat.elitism; i++) {
    newPopulation.push(global.neat.population[i])
  }

  // Breed the next individuals
  for (let i = 0; i < global.neat.popsize - global.neat.elitism; i++) {
    newPopulation.push(global.neat.getOffspring())
  }

  // Replace the old population with the new population
  global.neat.population = newPopulation
  global.neat.mutate()
}

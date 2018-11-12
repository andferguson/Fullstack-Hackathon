import React, {Component} from 'react'

import {p5Controller, optimizedController} from '../simulation/controllers'

/* Global variables */
global.savedPopulation = ''
global.activePopulation = ''

class Simulation extends Component {
  constructor() {
    super()
    this.state = {
      displayVisual: false,
      currentPopulation: false,
      MUTATION_RATE: String(global.MUTATION_RATE * 100),
      PLAYER_AMOUNT: String(global.PLAYER_AMOUNT),
      ITERATIONS: String(global.ITERATIONS),
      TRAINING_GENERATIONS: String(global.TRAINING_GENERATIONS),
      ELITISM: String(Math.round(global.ELITISM * 100 / global.PLAYER_AMOUNT)),
      DURATION_MULTIPLIER: String(global.DURATION_MULTIPLIER),
      PENALTY_MULTIPLIER: String(global.PENALTY_MULTIPLIER),
      PROXIMITY_MULTIPLIER: String(global.PROXIMITY_MULTIPLIER),
      PROXIMITY_EXPONENT: String(global.PROXIMITY_EXPONENT)
    }
  }

  handleChange = event => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    //set globals
    global.MUTATION_RATE = Number(this.state.MUTATION_RATE) / 100
    global.PLAYER_AMOUNT = Number(this.state.PLAYER_AMOUNT)
    global.ITERATIONS = Number(this.state.ITERATIONS)
    global.TRAINING_GENERATIONS = Number(this.state.TRAINING_GENERATIONS)
    global.ELITISM = Math.round(
      Number(this.state.ELITISM) / 100 * global.PLAYER_AMOUNT
    )
  }

  handleSimulationStart = event => {
    event.preventDefault()
    this.setState({
      displayVisual: false
    })
    optimizedController()
  }

  handleDisplayVisual = event => {
    event.preventDefault()
    this.setState({
      displayVisual: true
    })
    const myp5 = new p5(p5Controller, 'field')
  }

  handleUseStoredPopulation = event => {
    event.preventDefault()
    this.setState({
      currentPopulation: populations[event.target.value]
    })
    global.activePopulation = populations[event.target.value]
    console.log(`Population - ${event.target.value} - Sucessfully Loaded`)
    console.log(global.activePopulation)
  }

  handleUsePreviousPopulation = event => {
    event.preventDefault()
    this.setState({
      currentPopulation: populations[event.target.value]
    })
    global.activePopulation = global.savedPopulation.length
      ? JSON.parse(global.savedPopulation)
      : ''
    console.log(`Population - Local - Sucessfully Loaded`)
    console.log(global.activePopulation)
  }

  handleUseNewPopulation = event => {
    event.preventDefault()
    this.setState({
      currentPopulation: populations[event.target.value]
    })
    global.activePopulation = ''
    console.log(`Population - New - Sucessfully Loaded`)
    console.log(global.activePopulation)
  }

  handleCopy = () => {
    const copyText = document.getElementById('output')
    copyText.select()
    document.execCommand('copy')
    alert('Neural Network Saved to Clipboard')
  }

  render() {
    return (
      <div>
        <h2>SIMULATION CONTROL</h2>
        <form onSubmit={this.handleSubmit}>
          <h4>EVOLUTION SETTINGS</h4>
          <div>
            <label>MUTATION_RATE:</label>
            <input
              type="range"
              min="1"
              max="100"
              value={this.state.MUTATION_RATE}
              name="MUTATION_RATE"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>ELITISM:</label>
            <input
              type="range"
              min="1"
              max="100"
              value={this.state.ELITISM}
              name="ELITISM"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>PLAYER_AMOUNT:</label>
            <input
              type="number"
              min="50"
              max="300"
              value={this.state.PLAYER_AMOUNT}
              name="PLAYER_AMOUNT"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>ITERATIONS:</label>
            <input
              type="number"
              min="50"
              max="500"
              value={this.state.ITERATIONS}
              name="ITERATIONS"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>TRAINING_GENERATIONS:</label>
            <input
              type="number"
              min="1"
              max="500"
              value={this.state.TRAINING_GENERATIONS}
              name="TRAINING_GENERATIONS"
              onChange={this.handleChange}
            />
          </div>
          <h4>FITTNESS FUNCTION SETTINGS</h4>
          <div>
            <label>DURATION_MULTIPLIER:</label>
            <input
              type="number"
              min="1"
              max="10000"
              value={this.state.DURATION_MULTIPLIER}
              name="DURATION_MULTIPLIER"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>PENALTY_MULTIPLIER:</label>
            <input
              type="number"
              min="1"
              max="10000"
              value={this.state.PENALTY_MULTIPLIER}
              name="PENALTY_MULTIPLIER"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>PROXIMITY_MULTIPLIER:</label>
            <input
              type="number"
              min="1"
              max="10000"
              value={this.state.PROXIMITY_MULTIPLIER}
              name="PROXIMITY_MULTIPLIER"
              onChange={this.handleChange}
            />
          </div>{' '}
          <div>
            <label>PROXIMITY_EXPONENT:</label>
            <input
              type="number"
              min="1"
              max="5"
              value={this.state.PROXIMITY_EXPONENT}
              name="PROXIMITY_EXPONENT"
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Apply Changes</button>
        </form>
        <hr />
        <h4>PRELOAD POPULATION</h4>
        <button type="button" value="new" onClick={this.handleUseNewPopulation}>
          Load New
        </button>
        <button
          type="button"
          value="local"
          onClick={this.handleUsePreviousPopulation}
        >
          Load Local Output
        </button>
        <button
          type="button"
          value="pop_100"
          onClick={this.handleUseStoredPopulation}
        >
          Load Gen 100
        </button>
        <button
          type="button"
          value="pop_200"
          onClick={this.handleUseStoredPopulation}
        >
          Load Gen 200
        </button>
        <button
          type="button"
          value="pop_300"
          onClick={this.handleUseStoredPopulation}
        >
          Load Gen 300
        </button>
        <hr />
        <h4>START CONTROLS</h4>
        <button type="button" onClick={this.handleSimulationStart}>
          Run Optimized Simulation
        </button>
        <button type="button" onClick={this.handleDisplayVisual}>
          Run Visual Simulation
        </button>
        <hr />

        <div id="field" />
        {this.state.displayVisual ? (
          <svg id="draw" className="draw" />
        ) : (
          <span />
        )}
        <h2>SIMULATION RESULT</h2>
        <button type="button" onClick={this.handleCopy}>
          Copy to Clipboard
        </button>
        <hr />
        <textarea
          id="output"
          rows="300"
          cols="150"
          value={global.savedPopulation}
        />
      </div>
    )
  }
}

export default Simulation

import React from 'react'
//import {Link} from 'react-router-dom'

const Navbar = () => (
  <div>
    <h1>NEURAL NETWORK SIMULATOR</h1>
    <p>
      In the simulation below, neural networks that have been evolved through
      roughly 100 generations try to seek a target without crashing. Their goal
      is to reach the green circle, however hitting a red obsticle or a wall
      will incur a score penalty.
    </p>
    <video
      width="1198"
      height="398"
      autoPlay
      muted
      loop
      src="/resources/NN-Demo.mp4"
      type="video/mp4"
    />
    <p>
      The agents' task is very simple. They will gain points as long as they do
      not hit an obsticle, and their score will increase more the closer they
      get to the target. At the end of each generation, extra points are given
      to agents that complete the task, and a new generation of agents is
      created using the best agents in the previous round.
      <br />
      <br />
      Each agent has the following inputs:
    </p>
    <ul>
      <li>The distance to left edge</li>
      <li>The distance to top edge</li>
      <li>Its own speed in the x-axis</li>
      <li>Its own speed in the y-axis</li>
      <li>The angle towards the target</li>
      <li>The distance to the target</li>
      <li>The angle towards the closest obsticle</li>
      <li>The distance to the closest obsticle</li>
      <li>The angle towards the second closest obsticle</li>
      <li>The distance to the second closest obsticle</li>
      <li>The angle towards the third closest obsticle</li>
      <li>The distance to the third closest obsticle</li>
    </ul>
    <p>The output of each agent is just the desired movement direction.</p>
    <hr />
    <h1>How To Use</h1>
    <h3>Simulation Control</h3>
    <p>
      The simulation can be run below, and has two modes.
      <br />
      <br />
      The optimized simulation runs with no visual output, and is designed for
      speed (about 7 genaerations/second). This is useful for building a
      population quickly, however there is no way to see whats happening outside
      of log statements.
      <br />
      <br />
      By comparison the visual simulation runs with some useful graphics, so
      that we can see whats happening, and is much slower (about 6.5
      genaerations/minute). Along with a visual
      <br />
      <br />
      and allows for manual override of much of the simulation's functionality.
      <br />
      <br />
      The evolution settings allow for direct manipulation of constants used in
      Neataptic.js' genetic algorithms.
      <br />
      <br />
      These include:
    </p>
    <table>
      <tr>
        <td>MUTATION_RATE</td>
        <td>Probability of mutations occuring within a network</td>
      </tr>
      <tr>
        <td>ELITISM</td>
        <td>
          Proportion of networks that will move to the next generation unchanged
        </td>
      </tr>
      <tr>
        <td>PLAYER_AMOUNT</td>
        <td>Number of agents in the simulation (High Performance Impact)</td>
      </tr>
      <tr>
        <td>ITERATIONS</td>
        <td>Number of simulation frames per generation</td>
      </tr>
      <tr>
        <td>TRAINING_GENERATIONS</td>
        <td>Number of generatiosn simulated</td>
      </tr>
    </table>
    <p>
      The fitness function settings allow for manipulation of the fitness
      function used to score and rank agent preformance. I've fount that that
      default values work very well, however interesting behaviours can arise
      when these settings are changed.
      <br />
      <br />
      They include:
    </p>
    <table>
      <tr>
        <td>DURATION_MULTIPLIER</td>
        <td>
          Increases points gained for suriving each simulaion frame without a
          collision
        </td>
      </tr>
      <tr>
        <td>PENALTY_MULTIPLIER</td>
        <td>Increases points lost for collisions</td>
      </tr>
      <tr>
        <td>PROXIMITY_MULTIPLIER</td>
        <td>
          Increases linear ramp for points awareded for proximity to the target
        </td>
      </tr>
      <tr>
        <td>PROXIMITY_EXPONENT</td>
        <td>
          Increases exponential ramp for points awareded for proximity to the
          target (Warning: this will cause the score to inflate very quickly)
        </td>
      </tr>
    </table>
    <h3>Population Control</h3>
    <p>
      Building and tests a population takes time, so I've included some test
      populations that you can try out! There are options to load in these test
      sets, or to load the result of a prevous simulation. This is convient
      becasue it allows you to run the optimized solution for many generations,
      and then switch to the visual simulation to see whats happening.
      <br />
      <br />
      They include:
    </p>
    <hr />
  </div>
)

export default Navbar

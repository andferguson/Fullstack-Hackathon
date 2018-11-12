import React from 'react'
import {connect} from 'react-redux'
//import {Link} from 'react-router-dom'

const Navbar = () => (
  <div>
    <h1>NEURAL NETWORK SIMULATOR</h1>
    <nav>
      <div>
        {/* The navbar will show these links before you log in */}
        {/* <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link> */}
      </div>
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    user: state.user
  }
}

// const mapDispatch = dispatch => {
//   return {
//     handleClick() {
//       dispatch(logout())
//     }
//   }
// }

export default connect(mapState, null)(Navbar)

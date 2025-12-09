import React from 'react'
import PropTypes from "prop-types";

function Greet({ name }) {
  return (
    <div>Hello , {name} !!</div>
  )
}
Greet.defaultProps = {
  name: "Guest"
}; 

Greet.PropTypes = {
  name: PropTypes.string.isRequired
};  


export default Greetings
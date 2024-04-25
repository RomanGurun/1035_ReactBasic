import React from 'react'
import PropTypes from 'prop-types'
const Button = (props) => {
    console.log(props);
  return (
      <button style={{backgroundColor:`${props.bgColor}`}}>{props.textInsideButton}</button>

     )
}

Button.propTypes={
  textInsideButton:PropTypes.string.isRequired
// button element ko textInside value string bayak bhaye error aunxa

}

Button.defaultProps={
  bgColor:'yellow',
  textInsideButton:"sad"
}
export default Button

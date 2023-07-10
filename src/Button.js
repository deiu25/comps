import PropTypes from 'prop-types';
import React from 'react'

export const Button = ({children, primary, secondary, success, warning, danger, outline, rounded,}) => {
  return (
    <button>{children}</button>
  )

  Button.propTypes = {
    checkVarioationValue: ( primary, secondary, success, warning, danger, outline, rounded, ) => {
        const count = Number(!!primary)
        + Number(!!secondary)  
        + Number(!!success)
        + Number(!!warning)
        + Number(!!danger)
        + Number(!!outline)
        + Number(!!rounded)
        if (count > 1) {
            return new Error(
                `Button component can't have more than one variation value`
            )
            }

        if (count === 0) {
            return new Error(
                `Button component must have at least one variation value`
            )
        }

        return null
    },
}
}

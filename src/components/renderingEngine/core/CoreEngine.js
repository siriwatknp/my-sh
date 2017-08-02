import React from 'react'
import PropTypes from 'prop-types'
import { compose, withContext } from 'recompose'
import { createComponents } from './ComponentFactory'

const CoreEngine = compose(
  withContext(
    { componentById: PropTypes.object },
    ({ bluePrint: { componentById } }) => ({ componentById }),
  ),
)(
  ({
    bluePrint,
  }) => {
    if (!bluePrint || !bluePrint.details) {
      return null
    }
    return (
      <div>
        {createComponents(bluePrint.details)}
      </div>
    )
  },
)

CoreEngine.propTypes = {
  bluePrint: PropTypes.shape({
    details: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    componentById: PropTypes.object.isRequired,
  }).isRequired,
}
CoreEngine.defaultProps = {}

export default CoreEngine

import React from 'react'
import { Container as BulmaContainer } from 'components/elements'
import { rendererPropTypes } from '../utils/componentUtils'
import { createComponents } from '../core/ComponentFactory'

const Container = ({
  components,
  style,
  settings,
}) => {
  return (
    <BulmaContainer style={style} {...settings}>
      {createComponents(components)}
    </BulmaContainer>
  )
}

Container.propTypes = {
  ...rendererPropTypes
}
Container.defaultProps = {}

export default Container

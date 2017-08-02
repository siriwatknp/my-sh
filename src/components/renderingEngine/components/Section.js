import React from 'react'
import { Section as BulmaSection } from 'components/elements'
import { rendererPropTypes } from '../utils/componentUtils'
import { createComponents } from '../core/ComponentFactory'

const Section = ({
  components,
  style,
  settings,
}) => {
  return (
    <BulmaSection style={style} {...settings}>
      {createComponents(components)}
    </BulmaSection>
  )
}

Section.propTypes = {
  ...rendererPropTypes
}
Section.defaultProps = {}

export default Section

import React from 'react'
import PropTypes from 'prop-types'
import { createComponents } from '../core/ComponentFactory'
import { componentPropTypes } from '../utils/componentUtils'

const Paragraph = ({
  lang,
  content: {
    text,
  },
  components,
  settings: {
    Elm,
    ...otherSettings,
  },
  style,
}) => {
  return (
    <Elm
      {...otherSettings}
      style={style}
    >
      {text[lang]}
      {createComponents(components)}
    </Elm>
  )
}

Paragraph.propTypes = {
  ...componentPropTypes,
  components: PropTypes.array,
}
Paragraph.defaultProps = {
  lang: 'en'
}

export default Paragraph

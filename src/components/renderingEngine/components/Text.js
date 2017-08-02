import React from 'react'
import { componentPropTypes } from '../utils/componentUtils'

const Text = ({
  lang,
  content: {
    text,
  },
  settings: {
    Elm = 'span',
    ...other,
  },
  style,
}) => {
  return (
    <Elm
      {...other}
      style={style}
    >
      {text[lang]}
    </Elm>
  )
}

Text.propTypes = {...componentPropTypes}
Text.defaultProps = {
  lang: 'en'
}

export default Text

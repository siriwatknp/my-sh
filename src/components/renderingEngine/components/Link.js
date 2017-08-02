import React from 'react'
import { componentPropTypes } from '../utils/componentUtils'

const Link = ({
  lang,
  content: {
    text,
    href,
    target,
  },
  settings,
  style,
}) => {
  return (
    <a
      href={href}
      target={target === '_self' ? '' : target}
      style={style}
      {...settings}
    >
      {text[lang]}
    </a>
  )
}

Link.propTypes = {
  ...componentPropTypes
}
Link.defaultProps = {
  lang: 'en'
}

export default Link

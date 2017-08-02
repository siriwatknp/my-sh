import React from 'react'
import { Subtitle as BulmaSubtitle } from 'components/elements'
import { componentPropTypes } from '../utils/componentUtils'

const Subtitle = ({
  lang,
  content: {
    text,
  },
  style,
  settings,
}) => {
  return (
    <BulmaSubtitle style={style} {...settings}>
      {text[lang]}
    </BulmaSubtitle>
  )
}

Subtitle.propTypes = {
  ...componentPropTypes
}
Subtitle.defaultProps = {
  lang: 'en'
}

export default Subtitle

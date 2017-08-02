import React from 'react'
import { Title as BulmaTitle } from 'components/elements'
import { componentPropTypes } from '../utils/componentUtils'

const Title = ({
  lang,
  content: {
    text,
  },
  style,
  settings,
}) => {
  return (
    <BulmaTitle style={style} {...settings}>
      {text[lang]}
    </BulmaTitle>
  )
}

Title.propTypes = {
  ...componentPropTypes
}
Title.defaultProps = {
  lang: 'en'
}

export default Title

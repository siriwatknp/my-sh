import React from 'react'
import { Img } from 'components/elements'
import { componentPropTypes } from '../utils/componentUtils'

const Image = ({
  content: {
    src,
    alt,
  },
  settings,
  style,
}) => {
  return (
    <Img
      src={src}
      alt={alt}
      style={style}
      {...settings}
    />
  )
}

Image.propTypes = {...componentPropTypes}
Image.defaultProps = {}

export default Image

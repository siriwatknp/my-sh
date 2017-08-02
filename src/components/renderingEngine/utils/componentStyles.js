import { createSideObject } from './componentUtils'

export const sides = {
  top: '',
  bottom: '',
  left: '',
  right: '',
}


/** All Styles **/

export const background = {
  video: '',
  backgroundColor: '',
  backgroundImage: '',
  backgroundSize: '',
  objectFit: '',
}

export const layout = {
  display: '',
  width: '',
  height: '',
  overflow: '',
  ...createSideObject('', '', '', '', { pre: 'margin' }),
  ...createSideObject('', '', '', '', { pre: 'padding' }),
}

export const typography = {
  fontFamily: '',
  fontWeight: '',
  fontStyle: '',
  fontSize: '',
  color: '',
  lineHeight: '',
  letterSpacing: '',
  textAlign: '',
  textIndent: '',
  textDecoration: '',
  textTransform: '',
}

export const border = {
  borderStyle: '',
  ...createSideObject('', '', '', '', { pre: 'border', suf: 'width' }),
  ...createSideObject('', '', '', '', { pre: 'border', suf: 'color' }),
  borderTopLeftRadius: '',
  borderTopRightRadius: '',
  borderBottomLeftRadius: '',
  borderBottomRightRadius: '',
}

import PropTypes from 'prop-types'
import {
  withProps,
} from 'recompose'
import upperFirst from 'lodash/upperFirst'
import pick from 'lodash/pick'
import pickBy from 'lodash/pickBy'
import reduce from 'lodash/reduce'

export const withComponents = () => withProps(({
  screen,
  background = {},
  defaultStyles = {},
  deviceStyles = {},
  defaultSettings = {},
  deviceSettings = {},
}) => {
  const backgroundStyle = pick(background,
    [
      'backgroundColor',
      'objectFit',
      'backgroundSize',
    ]
  )
  const backgroundImage = background.backgroundImage ?
    { backgroundImage: `url(${background.backgroundImage})` } : {}
  // styles and settings can be customized in each device
  //
  const activeStyles = { ...defaultStyles, ...deviceStyles[screen] }
  const activeSettings = { ...defaultSettings, ...deviceSettings[screen] }
  const normalizedStyles = flattenObject(activeStyles)
  const style = filterValidStyles(normalizedStyles)

  return {
    settings: activeSettings,
    style: { ...style, ...backgroundStyle, ...backgroundImage },
  }
})

export const rendererPropTypes = {
  components: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  style: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
}

export const componentPropTypes = {
  content: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
}

export const refComponents = {
  CONTAINER: 'container',
  SECTION: 'section',
  TITLE: 'title',
  SUBTITLE: 'subtitle',
  PARAGRAPH: 'paragraph',
  COLUMNS: 'columns',
  IMAGE: 'image',
  TEXT: 'text',
  LINK: 'link',
  BUTTON: 'button',
  DIVIDER: 'divider',
  CARD: 'card',
  DIV: 'div',
  HEADING: 'heading',
}

/**
 * This function will filter those key that have value (not equal '')
 * @param object
 * @returns object of valid keys
 */
const filterValidStyles = (object) => (
  pickBy(object, (value) => value !== '')
)

/**
 * create side object for ex. padding, margin
 * able to add prefix and/or suffix
 * @param top
 * @param right
 * @param bottom
 * @param left
 * @param options
 * @returns {{}}
 */
export const createSideObject = (top, right, bottom, left, options = { pre: '', suf: '' }) => {
  const { pre, suf } = options
  return {
    [`${pre || ''}Top${suf ? upperFirst(suf) : ''}`]: top,
    [`${pre || ''}Bottom${suf ? upperFirst(suf) : ''}`]: bottom,
    [`${pre || ''}Left${suf ? upperFirst(suf) : ''}`]: left,
    [`${pre || ''}Right${suf ? upperFirst(suf) : ''}`]: right,
  }
}

/**
 * flatten one level deep of object
 * @param styles
 * @returns {*}
 */
export const flattenObject = (styles) => {
  return reduce(styles, (result, val) => ({
    ...result,
    ...val,
  }), {})
}

import React, { PropTypes } from 'react';
import { createThemeElement } from './baseElementUtils';
import { mapLabelSize, mapStatus } from 'utils/constants/element';
import reduce from 'lodash/reduce';
import includes from 'lodash/includes';
import kebabCase from 'lodash/kebabCase';
const fieldProps = [
  'hasAddons',
  'hasAddonsLeft',
  'hasAddonsRight',
  'isGroup',
  'isGroupLeft',
  'isGroupRight',
  'isHorizontal',
]
const injectClassNameRelatedToProps = (props, mapper) => {
  // inject key in props that match mapper
  // transform key to kebabCase
  return reduce(props, (result, value, key) => {
    return result + (includes(mapper, key) ? `${kebabCase(key)} ` : '')
  }, '')
}

export const Box = createThemeElement('box');

export const Columns = createThemeElement('columns');

export const Column = createThemeElement('column');

export const Container = createThemeElement('container');

export const Content = createThemeElement('content');

export const Control = createThemeElement('control');

export const Field = createThemeElement('field');
// export const Field = ({ className, ...props}) => {
//
//   console.log('props',props)
//   return (
//     <BaseField
//       className={
//         `${injectClassNameRelatedToProps(
//             className,
//             fieldProps
//           )} ${props.className}`
//       }
//       {...props}
//     />
//   )
// }
const BaseFieldLabel = createThemeElement('field-label');
export const FieldLabel = ({ size, className, ...props }) => {
  return (
    <BaseFieldLabel
      className={`${mapLabelSize(size)} ${className}`}
      {...props}
    />
  )
}

FieldLabel.defaultProps = {
  size: 'default'
}

export const FieldBody = createThemeElement('field-body', 'div');

export const Figure = createThemeElement('image', 'figure');

export const Footer = createThemeElement('footer', 'footer');

export const FormGroup = createThemeElement('control is-grouped');

export const FormAddOns = createThemeElement('control has-addons');

export const Header = createThemeElement('', 'h1');

const BaseHelp = createThemeElement('help', 'span');
export const Help = ({ status, className, ...props }) => {
  return (
    <BaseHelp className={`${mapStatus(status)} ${className}`} {...props}/>
  )
}
Help.propTypes = {
  status: PropTypes.oneOf(['primary','success','danger','warning','primary']),
  className: PropTypes.string,
}

export const Hero = createThemeElement('hero', 'section');

export const HeroHead = createThemeElement('hero-head');

export const HeroBody = createThemeElement('hero-body');

export const Hr = createThemeElement('', 'hr');

export const Img = createThemeElement('', 'img');

Img.propTypes = {
  className: PropTypes.string,
  alt      : PropTypes.string.isRequired,
  src      : PropTypes.string.isRequired,
};

export const Notification = createThemeElement('notification');

export const Tabs = createThemeElement('tabs');

export const Title = createThemeElement('title', 'h3');

export const Section = createThemeElement('section', 'section');

export const Subtitle = createThemeElement('subtitle', 'h5');

export const Span = createThemeElement('', 'span');


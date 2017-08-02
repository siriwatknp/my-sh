import React, { PropTypes } from 'react';
import { createThemeElement } from './baseElementUtils';
import { mapSize } from 'utils/constants/element';
import { Icon } from './Icon';

const BaseElm = createThemeElement('button', 'a');

export const Button = ({ className, label, icon, size, hasIconLast, ...props }) => {
  return (
    <BaseElm className={`${mapSize(size)} ${className}`} {...props}>
      {icon && !hasIconLast && <Icon icon={icon} size={size}/>}
      {label && <span>{label}</span>}
      {icon && hasIconLast && <Icon icon={icon} size={size}/>}
    </BaseElm>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  size: PropTypes.oneOf(['sm','default','md','lg']),
  hasIconLast: PropTypes.bool,
  hasNoClass: PropTypes.bool,
  disabled: PropTypes.bool,
};
Button.defaultProps = {
  label: '',
  hasIconLast: false,
  disabled: false,
};
import React, { PropTypes } from 'react';
import cx from 'classnames';
import { createThemeElement } from './baseElementUtils';
import { mapSize } from 'utils/constants/element';

const BaseElm = createThemeElement('select', 'span');

export const Select = ({
  className,
  isDisabled,
  isLoading,
  children,
  size,
  ...props
}) => {
  return (
    <BaseElm
      className={
        cx(
          mapSize(size),
          isLoading && 'is-loading',
          isDisabled && 'is-disabled',
          className,
        )
      }
    >
      <select disabled={isDisabled} {...props}>
        {children}
      </select>
    </BaseElm>
  );
};

Select.propTypes = {
  ...BaseElm.propTypes,
  className: PropTypes.string,
  size: PropTypes.oneOf(['sm','default','md','lg']),
  isLoading: PropTypes.bool,
}
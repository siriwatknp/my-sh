import React, {
  PropTypes,
} from 'react';
import cx from 'classnames';
import { Control, Icon } from 'components/elements';
import BaseSelect from '../bases/BaseSelect';

const ControlSelect = ({ iconLeft, size,  ...props}) => {
  return (
    <Control className={cx(iconLeft && 'has-icons-left')}>
      <BaseSelect size={size} {...props}/>
      {iconLeft && <Icon icon={iconLeft} className="is-left" size={size} />}
    </Control>
  );
};

ControlSelect.propTypes = {
  ...BaseSelect.propTypes
};
ControlSelect.defaultProps = {};

export default ControlSelect;

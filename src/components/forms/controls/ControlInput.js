import React, {
  PropTypes,
} from 'react';
import cx from 'classnames';
import { Control, Icon } from 'components/elements';
import BaseInput from '../bases/BaseInput';

const ControlInput = ({
  iconLeft,
  iconRight,
  size,
  isLoading,
  ...props,
}) => {
  return (
    <Control
      className={
        cx(
          iconRight && 'has-icons-right',
          iconLeft && 'has-icons-left',
          isLoading && 'is-loading',
        )
      }
    >
      <BaseInput size={size} {...props}/>
      {iconLeft && <Icon icon={iconLeft} className="is-left" size={size} />}
      {iconRight && <Icon icon={iconRight} className="is-right" size={size} />}
    </Control>
  );
};

ControlInput.propTypes = {
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  isLoading: PropTypes.bool,
  ...Control.propTypes,
};
ControlInput.defaultProps = {};

export default ControlInput;

import React, {
  PropTypes,
} from 'react';
import { Input } from 'components/elements'

const BaseInput = ({
  onChange,
  ...props,
}) => {
  return (
    <Input
      {...props}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

BaseInput.propTypes = {
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['sm','default','md','lg']),
  onChange: PropTypes.func
};
BaseInput.defaultProps = {
  placeholder: '',
  size: 'default',
  onChange: () => {},
};

export default BaseInput;

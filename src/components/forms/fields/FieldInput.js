import React, {
  PropTypes,
} from 'react';
import {
  Field,
  Help,
} from 'components/elements';
import ControlInput from '../controls/ControlInput';
import FieldLayout from './FieldLayout';

const FieldInput = ({
  isHorizontal,
  fieldClass,
  size,
  label,
  message,
  status,
  ...props
}) => {
  return (
    <FieldLayout
      label={label}
      className={fieldClass}
      isHorizontal={isHorizontal}
      size={size}
    >
      <Field>
        <ControlInput
          size={size}
          status={status}
          {...props}
        />
        {message && <Help status={status}>{message}</Help>}
      </Field>
    </FieldLayout>
  );
};

FieldInput.propTypes = {
  label       : PropTypes.string,
  fieldClass  : PropTypes.string,
  isHorizontal: PropTypes.bool,
  ...ControlInput.propTypes,
};
FieldInput.defaultProps = {
  fieldClass  : '',
  label       : '',
  isHorizontal: false,
};

export default FieldInput;

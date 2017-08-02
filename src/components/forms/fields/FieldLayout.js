import React, {
  PropTypes,
} from 'react';
import cx from 'classnames';
import { Field, Label, FieldLabel, FieldBody } from 'components/elements';

const FieldLayout = ({ isHorizontal, className, size, label, children }) => {
  if(label && isHorizontal){
    // render in horizontal format
    return (
      <Field className={cx(className, isHorizontal && 'is-horizontal')}>
        <FieldLabel size={size}>
          <Label size={size}>{label}</Label>
        </FieldLabel>
        <FieldBody>
          {children}
        </FieldBody>
      </Field>
    )
  }
  return (
    <Field className={className}>
      {label && <Label size={size}>{label}</Label>}
      {children}
    </Field>
  );
};

FieldLayout.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  isHorizontal: PropTypes.bool,
};
FieldLayout.defaultProps = {
  className: '',
  label: '',
  isHorizontal: false,
};

export default FieldLayout;

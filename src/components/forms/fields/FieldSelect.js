import React, {
  PropTypes,
} from 'react'
import {
  Field,
  Help,
} from 'components/elements'
import ControlSelect from '../controls/ControlSelect'
import FieldLayout from './FieldLayout'

const FieldSelect = ({
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
        <ControlSelect
          size={size}
          status={status}
          {...props}
        />
        {message && <Help status={status}>{message}</Help>}
      </Field>
    </FieldLayout>
  )
}

FieldSelect.propTypes = {
  label: PropTypes.string,
  fieldClass: PropTypes.string,
  isHorizontal: PropTypes.bool,
  ...ControlSelect.propTypes,
}
FieldSelect.defaultProps = {
  fieldClass: '',
  label: '',
  isHorizontal: false,
}

export default FieldSelect

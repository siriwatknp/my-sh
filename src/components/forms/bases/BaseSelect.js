import React, {
  PropTypes,
} from 'react';
import { Select } from 'components/elements';

const BaseSelect = ({
  options,
  hasDefaultOption,
  defaultOptionLabel,
  onChange,
  ...props,
}) => {
  return (
    <Select
      {...props}
      onChange={(e) => onChange(e.target.value)}
    >
      {hasDefaultOption &&
        <option
          value={-1}
          disabled
        >
          {defaultOptionLabel}
        </option>
      }
      {options.map((option, i) => (
        <option
          key={i}
          value={typeof option === 'object' ? option.value : option}
        >
          {typeof option === 'object' ? option.label : option}
        </option>
      ))}
    </Select>
  );
};

BaseSelect.propTypes = {
  hasDefaultOption: PropTypes.bool,
  defaultOptionLabel: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
    }),
  ])),
  onChange: PropTypes.func,
};
BaseSelect.defaultProps = {
  hasDefaultOption: true,
  defaultOptionLabel: '- select an option -',
  options: [],
  onChange: () => {},
};

export default BaseSelect;

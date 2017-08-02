import React, {
  PropTypes,
} from 'react';
import cx from 'classnames';
import './StepperBridge.scss';

const StepperBridge = ({ isActive, children }) => {
  return (
    <div
      className={
        cx(
          'stepperBridge',
          isActive && 'activeStepper'
        )
      }
    >
      {children}
    </div>
  );
};

StepperBridge.propTypes = {};
StepperBridge.defaultProps = {};

export default StepperBridge;

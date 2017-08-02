import React, {
  PropTypes,
} from 'react';
import cx from 'classnames';
import './DateStepper.scss';

const DateStepper = ({
  onClick,
  isActive,
  image,
  title,
  subtitle,
}) => {
  return (
    <div
      className={
        cx(
          'stepperDate',
          isActive && 'activeStepper'
        )
      }
    >
      <div className="stepperImage" >
        <img src={image}/>
      </div>
      <h3 className="stepperTitle">{title}</h3>
      <h5 className="stepperSubtitle">{subtitle}</h5>
    </div>
  );
};

DateStepper.propTypes = {};
DateStepper.defaultProps = {};

export default DateStepper;

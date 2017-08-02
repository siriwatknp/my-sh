import React, {
  PropTypes,
} from 'react';

const Square = ({ black, children }) => {
  const fill = black ? 'black' : 'white';
  const stroke = black ? 'white' : 'black';
  return (
    <div
      style={{
        background: fill,
        color: stroke,
        width: '100%',
        height: '100%',
        textAlign: 'center'
      }}
    >
      {children}
    </div>
  );
};

Square.propTypes = {};
Square.defaultProps = {};

export default Square;

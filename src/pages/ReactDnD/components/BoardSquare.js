import React, {
  PropTypes,
} from 'react';
import { DropTarget } from 'react-dnd';
import Square from './Square';
import { ItemTypes } from '../utils/constants';

const squareTarget = {
  canDrop(props) {
    return props.canMoveKnight(props.x, props.y)
  },
  drop(props){
    props.moveKnight(props.x, props.y)
  }
}

const collect = (connect, monitor) => {
  console.log('monitor',monitor)
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  }
}

const BoardSquare = ({
  x,
  y,
  children,
  connectDropTarget,
  isOver,
  canDrop
}) => {
  const black = (x + y) % 2 === 1;
  const renderOverlay = (color) => {
    return (
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: 1,
        opacity: 0.5,
        backgroundColor: color,
      }} />
    );
  }
  return connectDropTarget(
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%'
      }}
    >
      <Square black={black}>
        {children}
      </Square>
      {isOver && !canDrop && renderOverlay('red')}
      {!isOver && canDrop && renderOverlay('yellow')}
      {isOver && canDrop && renderOverlay('green')}
    </div>
  );
};

BoardSquare.propTypes = {};
BoardSquare.defaultProps = {};

export default DropTarget(ItemTypes.KNIGHT, squareTarget, collect)(BoardSquare);

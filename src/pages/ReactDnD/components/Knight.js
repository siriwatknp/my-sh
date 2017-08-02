import React, {
  PropTypes,
} from 'react';
import { ItemTypes } from '../utils/constants';
import { DragSource } from 'react-dnd';

const knightSource = {
  beginDrag(props) {
    return {}
  }
}

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

const Knight = ({ connectDragSource, isDragging }) => {
  return connectDragSource(
    <span
      style={{
        fontSize: 40,
        fontWeight: 500,
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move'
      }}
    >
      ♘
    </span>
  );
};

Knight.propTypes = {};
Knight.defaultProps = {};

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);

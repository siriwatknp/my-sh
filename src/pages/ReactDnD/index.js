import React, {
  PropTypes,
} from 'react';
import { Container } from 'components/elements/index';
import Board from './components/Board';
import { createGame } from './utils/Game';

const Game = createGame()(Board);

const ReactDnD = ({}) => {
  return (
    <Container
      style={{
        height: 640
      }}
    >
      <Game />
    </Container>
  );
};

ReactDnD.propTypes = {};
ReactDnD.defaultProps = {};

export default ReactDnD;

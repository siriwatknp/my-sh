import React from 'react';
import { compose, withState, withProps, mapProps } from 'recompose';
const defaultKnightPosition = [1, 7]

export const createGame = (knightPosition = defaultKnightPosition) => (
  compose(
    withState('currentPosition', 'setKnightPosition', knightPosition),
    withProps(({ setKnightPosition, currentPosition }) => ({
      moveKnight: (toX, toY) => {
        setKnightPosition([toX, toY])
      },
      canMoveKnight: (toX, toY) => {
        const [x, y] = currentPosition;
        const dx = toX - x;
        const dy = toY - y;

        return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
               (Math.abs(dx) === 1 && Math.abs(dy) === 2)
      }
    })),
    mapProps(({ currentPosition, moveKnight, canMoveKnight,  ...props }) => ({
      knightPosition: currentPosition,
      moveKnight: (x, y) => canMoveKnight(x, y) ? moveKnight(x, y) : {},
      canMoveKnight,
      ...props,
    }))
  )
)
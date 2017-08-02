import React, {PropTypes} from 'react';
import {createThemeElement} from './baseElementUtils';

const BaseElm = createThemeElement('','nav');

export const Level = ({ isLeft, isRight, className, ...props }) => (
	<BaseElm
		Elm={
      isLeft || isRight ? 'div':'nav'
		}
		className={
      `${
        isLeft ? 'level-left'
          :
          isRight ? 'level-right'
            :
            'level'
        } ${className}`
		}
		{...props}
	/>
);

export const LevelItem = createThemeElement('nav-item');
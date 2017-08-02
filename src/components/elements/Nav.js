import React, { PropTypes } from 'react';
import { createThemeElement } from './baseElementUtils';

const BaseElm = createThemeElement('', 'nav');

export const Nav = ({ isLeft, isCenter, isRight, children, className, ...props }) => {
  return (
    <BaseElm
      Elm={isLeft || isCenter || isRight ? 'div' : 'nav'}
      className={
        `${
          isLeft ? 'nav-left'
            :
            isCenter ? 'nav-center'
              :
              isRight ? 'nav-right'
                :
                'nav'
          } ${className}`
      }
      {...props}
    >
      {children}
    </BaseElm>
  );
};

export const NavItem = createThemeElement('nav-item');
export const NavToggle = createThemeElement('nav-toggle', 'span');
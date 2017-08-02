import React, { PropTypes } from 'react';
import uniq from 'lodash/uniq';
import upperFirst from 'lodash/upperFirst';
import { getContext, setPropTypes, setDisplayName, defaultProps, compose } from 'recompose';
import cx from 'classnames';

export const withTheme = (displayName) => compose(
  setPropTypes({
    className: PropTypes.string,
    theme: PropTypes.object,
    hasNoClass: PropTypes.bool,
    Elm: PropTypes.string,
  }),
  setDisplayName(displayName),
  defaultProps({
    Elm: '',
    hasNoClass: false,
    className: '',
  }),
  getContext({ theme: PropTypes.object }),
);

export const createThemeElement = (initClassName = '', BaseElm = 'div') => (
  withTheme(`${upperFirst(initClassName)}`)(
    ({
      Elm,
      children,
      className = '',
      hasNoClass,
      theme,
      ...props
    }) =>{
      const DisplayElement = Elm || BaseElm;
      return (
        <DisplayElement className={
          extractClassName(theme, `${hasNoClass ? '' : initClassName} ${className}`)
        }
        {...props}
        >
          {children}
        </DisplayElement>
      );
    }
  )
);

export const extractClassName = (theme, className) =>{
  if (!className) {
    return '';
  }
  const classNames = uniq(className.split(' '));
  return cx(classNames.map((className) => {
    if(!className ||  className === 'undefined'){
      return null;
    }
    const CLASS_NAME = generateCustomClassName(className);
    return theme && theme[CLASS_NAME] ? theme[CLASS_NAME] : CLASS_NAME || '';
  }))
};

// for customize the whole className project
// ex. adding prefix to all element
const generateCustomClassName = (className) => `${className}`;
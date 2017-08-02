import React, {PropTypes} from 'react';
import {createThemeElement} from './baseElementUtils';
import {mapSize, mapStatus} from 'utils/constants/element';

export const Div = createThemeElement('');
export const Heading = createThemeElement('heading','h1');
export const List = createThemeElement('','li');
export const UnorderdList = createThemeElement('','ul');
export const Table = createThemeElement('table','table');
export const TextArea = createThemeElement('textarea','textarea');
const BaseInput = createThemeElement('input','input');
export const Input = ({ size, status, className, ...props }) => (
  <BaseInput
    className={`${mapSize(size)} ${mapStatus(status)} ${className}`}
    {...props}
  />
)
const BaseLabel = createThemeElement('label','label');
export const Label = ({ size, className, ...props }) => (
  <BaseLabel
    className={`${mapSize(size)} ${className}`}
    {...props}
  />
)
export const Form = createThemeElement('', 'form');
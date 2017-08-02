import React, {PropTypes} from 'react';
import {createThemeElement} from './baseElementUtils';
import {Icon} from './Icon';

export const Panel = createThemeElement('panel','nav');

export const PanelHeading = createThemeElement('panel-heading');

export const PanelBlock = createThemeElement('panel-block');

export const PanelTabs = createThemeElement('panel-tabs');

export const PanelIcon = ({ className = '', ...props }) => (
	<Icon className={`panel-icon ${className}`} {...props}/>
);
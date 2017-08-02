import React, {PropTypes} from 'react';
import {mapIconSize} from 'utils/constants/element';
import {createThemeElement} from './baseElementUtils';

const BaseElm = createThemeElement('icon','span');

export const Icon = ({ icon, size, className, ...props }) => {
	return(
		<BaseElm {...props} className={`${mapIconSize(size)} ${className}`}>
			<i className={icon} />
		</BaseElm>
	)
};

Icon.propTypes = {
	Elm:PropTypes.string,
	icon:PropTypes.string,
	size:PropTypes.string,
	className:PropTypes.string,
};
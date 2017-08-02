import React, { PropTypes } from 'react';
import { createThemeElement } from './baseElementUtils';

const BaseElm = createThemeElement();

export const Card = ({
  isHeader,
  isHeaderTitle,
  isHeaderIcon,
  isImage,
  isContent,
  isFooter,
  isFooterItem,
  className,
  ...props,
}) => (
  <BaseElm
    {...props}
    Elm={
      isHeader ? (
        'header'
      ) : (
        isHeaderTitle ? (
          'p'
        ) : (
          isHeaderIcon || isFooterItem ? (
            'a'
          ) : (
            isFooter ? (
              'footer'
            ) : 'div'
          )
        )
      )
    }
    className={
      `${
        isHeader ? 'card-header'
          :
          isHeaderTitle ? 'card-header-title'
            :
            isHeaderIcon ? 'card-header-icon'
              :
              isContent ? 'card-content'
                :
                isFooter ? 'card-footer'
                  :
                  isFooterItem ? 'card-footer-item'
                    :
                    isImage ? 'card-image'
                      :
                      'card'
        } ${className}`
    }
  />
);
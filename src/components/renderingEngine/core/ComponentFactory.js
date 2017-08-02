import React from 'react'
import ComponentSwitcher from './ComponentSwitcher'

export const createComponents = (components) => {
  return components.map((componentId) => (
    <ComponentSwitcher
      key={componentId}
      componentId={componentId}
    />
  ))
}
import React from 'react'
import PropTypes from 'prop-types'
import { Columns as BulmaColumns, Column } from 'components/elements'
import { createComponents } from '../core/ComponentFactory'
import { withComponents } from '../utils/componentUtils'

const EnhanceColumn = withComponents()(
  ({
    gutter,
    width,
    components,
    style,
    settings: {
      className,
      ...otherSettings,
    },
  }) => {
    return (
      <Column
        style={{ padding: gutter, ...style }}
        className={`${className} is-${width}`}
        {...otherSettings}
      >
        {createComponents(components)}
      </Column>
    )
  }
)

const Columns = ({
  columns,
  settings: {
    gutter,
    ...otherSettings,
  },
  style,
}) => {
  return (
    <BulmaColumns
      style={{ margin: -gutter || '', ...style }}
      {...otherSettings}
    >
      {columns.map((column, i) => (
        <EnhanceColumn key={i} gutter={gutter} {...column} />
      ))}
    </BulmaColumns>
  )
}

Columns.propTypes = {
  columns: PropTypes.array.isRequired,
}
Columns.defaultProps = {}

export default Columns

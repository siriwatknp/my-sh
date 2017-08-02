import React from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'semantic-ui-react'
import { compose, withState } from 'recompose'

const MenuList = compose(
  withState(
    'activeItem',
    'setActiveItem',
    ({ defaultValue, menus }) => defaultValue || (
      menus && menus.length ? (
        menus[0].value
      ) : ('')
    )
  )
)(
  ({
    activeItem,
    setActiveItem,
    menus,
    onClick,
  }) => {
    const handleClick = (label, value) => {
      onClick({ label, value })
      return setActiveItem(value)
    }
    return (
      <Menu pointing vertical>
        {menus.map(({ label, value }) => {
          return (
            <Menu.Item
              key={value}
              name={value}
              active={value === activeItem}
              onClick={() => handleClick(label, value)}
            >
              {label}
            </Menu.Item>
          )
        })}
      </Menu>
    )
  }
)

MenuList.propTypes = {}
MenuList.defaultProps = {}

export default MenuList

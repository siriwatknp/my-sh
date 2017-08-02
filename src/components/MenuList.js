import React, {
  PropTypes,
} from 'react'
import Subheader from 'material-ui/Subheader';
import SelectableList from './SelectableList'
import { ListItem } from 'material-ui/List'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import routeConstants  from '../utils/constants/routeConstants';
import { withRouter } from 'react-router';

const MenuList = withRouter(
  ({ router, onToggleMenuList }) => {
    const handleClickMenu = (route) => {
      onToggleMenuList();
      return router.push(`/${route}`)
    }
    return (
      <SelectableList
        style={{ padding: 0 }}
        defaultValue={routeConstants[0].value}
      >
        <AppBar
          onRightIconButtonTouchTap={onToggleMenuList}
          iconElementRight={<IconButton><NavigationClose /></IconButton>}
          iconElementLeft={<div></div>}
        />
        <Subheader>a-frame</Subheader>
        {routeConstants.map((route, i) => {
          return (
            <ListItem
              key={i}
              value={route.value}
              innerDivStyle={{ padding: 0 }}
            >
              <div
                style={{ padding: 16 }}
                onClick={() => handleClickMenu(route.value)}
              >
                {route.label}
              </div>
            </ListItem>
          )
        })}
      </SelectableList>
    )
  }
)

MenuList.propTypes = {}
MenuList.defaultProps = {}

export default MenuList

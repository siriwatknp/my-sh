import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import { compose, withProps, withState } from 'recompose';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuList from './components/MenuList';

class App extends Component {
  render() {
    const { open, onToggleMenuList, location: { pathname } } = this.props;
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar
            title="Practices"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={onToggleMenuList}
          />
          <div
            style={{
              margin: '40px 60px',
              paddingLeft: open ? 256 : 0,
              minHeight: 1000,
              transition: '450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
            }}
          >
            {this.props.children}
          </div>
          <Drawer open={open}>
            <MenuList
              value={pathname}
              onToggleMenuList={onToggleMenuList}
            />
          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default compose(
  withState('open', 'onOpen', false),
  withProps(({ open, onOpen }) => ({
    onToggleMenuList: () => onOpen(!open),
  }))
)(App);

import React, {
  Component,
  PropTypes
} from 'react'
import {
  List,
  makeSelectable
} from 'material-ui/List'

let SelectableList = makeSelectable(List)

function wrapState (ComposedComponent) {
  return class SelectableList extends Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
      defaultValue: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
    }

    componentWillMount () {
      this.setState({
        selectedIndex: this.props.defaultValue,
      })
    }

    handleRequestChange = (event, index) => {
      this.setState({
        selectedIndex: index,
      })
    }

    render () {
      const { style } = this.props;
      return (
        <ComposedComponent
          style={style}
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
        >
          {this.props.children}
        </ComposedComponent>
      )
    }
  }
}

export default SelectableList = wrapState(SelectableList)

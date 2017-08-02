import React from 'react'
import PropTypes from 'prop-types'

import { Button, Segment } from 'semantic-ui-react'

import '../../semantic/dist/semantic.min.css'

const ReactSemanticUI = (props) => {
  return (
    <div>
      <Button>Hello</Button>
      <Segment>Hello World</Segment>
    </div>
  )
}

ReactSemanticUI.propTypes = {}
ReactSemanticUI.defaultProps = {}

export default ReactSemanticUI

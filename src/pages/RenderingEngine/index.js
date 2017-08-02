import React from 'react'
import PropTypes from 'prop-types'
import { withState } from 'recompose';

import { FieldSelect } from 'components/forms/fields'
import CoreEngine from 'components/renderingEngine';
import example1  from 'components/renderingEngine/examples/ex1/main'

const RenderingEngine = withState('currentDesign', 'setCurrentDesign', 'home')(
  ({ currentDesign }) => {
    const examples = {
      home: example1
    }
    return (
      <div>
        <FieldSelect value={currentDesign} options={['home']}/>
        <div style={{ marginTop: 20 }}>
          <CoreEngine bluePrint={examples[currentDesign]}/>
        </div>
      </div>
    )
  }
)

RenderingEngine.propTypes = {}
RenderingEngine.defaultProps = {}

export default RenderingEngine

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text, boolean, select, array } from '@kadira/storybook-addon-knobs';
import '../../../libs/font-awesome-4.6.3/css/font-awesome.css';
import '../../../libs/bulma-0.4.2/bulma.css';

const stories = storiesOf('Rendering Engine', module);
stories.addDecorator(withKnobs);

import CoreEngine from 'components/renderingEngine'
import example1 from '../../../src/components/renderingEngine/examples/ex1/main'

stories.addWithInfo(
  'Core Engine',
  '',
  () => {
    return (
      <CoreEngine bluePrint={example1} />
    )
  }
)
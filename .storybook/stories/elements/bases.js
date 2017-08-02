import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text, boolean, select, array } from '@kadira/storybook-addon-knobs';
import '../../../libs/font-awesome-4.6.3/css/font-awesome.css';
import '../../../libs/bulma-0.4.2/bulma.css';

import { BaseInput, BaseSelect } from 'components/forms/bases';

const stories = storiesOf('Base Element', module);
stories.addDecorator(withKnobs);

stories.addWithInfo(
  'Base Input',
  'this component will give e.target.value back to onChange',
  () => {
    const size = select('Size', ['...other','sm','default','md','lg'])
    return (
      <BaseInput
        placeholder="hello world"
        size={size}
      />
    )
  }
).addWithInfo(
  'Base Select',
  'this component will give e.target.value back to onChange',
  () => {
    const options = array('Options', ['option1','option2','option3'])
    const hasDefaultOption = boolean('Has default option', false)
    const defaultOptionLabel = text('Default option label', 'please select value')
    return (
      <BaseSelect
        defaultOptionLabel={defaultOptionLabel}
        hasDefaultOption={hasDefaultOption}
        options={options}
      />
    )
  }
)
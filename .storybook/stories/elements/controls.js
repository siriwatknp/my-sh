import React from 'react';
import { storiesOf } from '@kadira/storybook';
import {
  withKnobs,
  text,
  boolean,
  select,
  array,
} from '@kadira/storybook-addon-knobs';
import '../../../libs/font-awesome-4.6.3/css/font-awesome.css';
import '../../../libs/bulma-0.4.2/bulma.css';

import {
  ControlInput,
  ControlSelect,
} from 'components/forms/controls';

const stories = storiesOf('Controls', module);
stories.addDecorator(withKnobs);

stories.addWithInfo(
  'Control Input',
  'Control Input will be able to add icons input',
  () => {
    const placeholder = text('Placeholder', 'placeholder');
    const iconLeft = text('icon left', 'fa fa-envelope');
    const iconRight = text('icon right', 'fa fa-warning');
    const status = select(
      'Status',
      ['...other', 'primary', 'info', 'success', 'danger', 'warning'],
    );
    const size = select('Size', ['...other', 'sm', 'default', 'md', 'lg']);
    return (
      <ControlInput
        placeholder={placeholder}
        iconLeft={iconLeft}
        iconRight={iconRight}
        status={status}
        size={size}
      />
    );
  },
).addWithInfo(
  'Control Select',
  'Control Select is the same as BaseSelect, only have Control wrapped <Control><BaseSelect /></Control>',
  () => {
    const iconLeft = text('icon left', 'fa fa-envelope');
    const options = array('Options', ['option1','option2','option3'])
    const hasDefaultOption = boolean('Has default option', false)
    const defaultOptionLabel = text('Default option label', 'please select value')
    const size = select('Size', ['...other', 'sm', 'default', 'md', 'lg']);
    return (
      <ControlSelect
        iconLeft={iconLeft}
        size={size}
        defaultOptionLabel={defaultOptionLabel}
        hasDefaultOption={hasDefaultOption}
        options={options}
      />
    );
  },
)
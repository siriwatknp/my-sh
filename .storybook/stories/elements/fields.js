import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text, boolean, select } from '@kadira/storybook-addon-knobs';
import '../../../libs/font-awesome-4.6.3/css/font-awesome.css';
import '../../../libs/bulma-0.4.2/bulma.css';

import { Button } from 'components/elements';
import { FieldInput, FieldLayout } from 'components/forms/fields';

const stories = storiesOf('Fields', module);
stories.addDecorator(withKnobs);

stories.addWithInfo(
  'Field Layout',
  'Use this component to render components in form pattern',
  () => {
    const isHorizontal = boolean('is horizontal', false)
    return (
      <FieldLayout
        fieldClass=""
        label="hello"
        size="sm"
        isHorizontal={isHorizontal}
      >
        <Button
          size="sm"
          label="gogo"
        />
        <Button
          size="sm"
          label="gogo"
        />
      </FieldLayout>
    )
  }
).addWithInfo(
  'Field Input',
  'fieldClass can contain this list: \n' +
  ' has-addons, has-addons-centered, has-addons-right, is-grouped, is-grouped-centered, is-grouped-right, is-horizontal' +
  '',
  () => {
    const isHorizontal = boolean('is horizontal', false)
    const placeholder = text('Placeholder', 'placeholder')
    const label = text('Label', 'label')
    const iconLeft = text('icon left', 'fa fa-envelope')
    const iconRight = text('icon right', 'fa fa-warning')
    const status = select('Status',['...other', 'primary','info','success','danger','warning'])
    const size = select('Size', ['...other','sm','default','md','lg'])
    const message = text('Message', 'message')
    return (
      <FieldInput
        placeholder={placeholder}
        fieldClass=""
        label={label}
        iconLeft={iconLeft}
        iconRight={iconRight}
        status={status}
        size={size}
        isHorizontal={isHorizontal}
        message={message}
      />
    )
  }
)
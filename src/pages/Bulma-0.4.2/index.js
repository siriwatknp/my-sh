import React, {
  PropTypes,
} from 'react'
import 'assets/font-awesome-4.6.3/css/font-awesome.min.css'
import ListOfScrollToElements from 'components/ListOfScrollToElements/index';
import { Element }  from 'react-scroll';
import { Container, Columns, Column, Title, Content } from 'components/elements/index'

import { BaseInput, BaseSelect } from 'components/forms/bases'
import { ControlInput, ControlSelect } from 'components/forms/controls'
import { FieldInput, FieldLayout } from 'components/forms/fields'

export const scrollElement = {
  input: { label: 'Input', scrollTo: 'input'},
}

export const items = [
  scrollElement.input,
]

const Example = ({ children }) => <div style={{ padding: 10 }}>{children}</div>

const Bulma042 = ({}) => {
  return (
    <Container>
      <Columns>
        <Column className="is-10">
          <Element name={scrollElement.input.scrollTo}>
            <Title>Input</Title>
            <Content>
              <Example>
                <h4>Simple Input</h4>
                <p>a simple input, accept same props as input</p>
                <BaseInput placeholder="simple input"/>
              </Example>
              <Example>
                <h4>Control Input</h4>
                <p>higher level of base input, can insert icon (left  & right)</p>
                <ControlInput iconLeft="fa fa-envelope" iconRight="fa fa-warning" placeholder="control input" />
              </Example>
              <Example>
                <h4>Field Input</h4>
                <p>higher level of control input, can add label and choose layout</p>
                <FieldInput label="input" iconLeft="fa fa-envelope" iconRight="fa fa-warning" placeholder="field input"/>
              </Example>
            </Content>
          </Element>
        </Column>
        <div className="column is-2">
          <ListOfScrollToElements
            isSticky
            items={items}
          />
        </div>
      </Columns>
    </Container>
  )
}

Bulma042.propTypes = {}
Bulma042.defaultProps = {}

export default Bulma042

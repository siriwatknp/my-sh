import React from 'react'
import { compose, withState } from 'recompose'
import glamorous from 'glamorous'
import { Form, Button } from 'semantic-ui-react'

const Wrapper = glamorous.div({
  transition: '0.3s ease-in-out',
  overflow: 'hidden',
},
  (props) => ({
    height: props.active ? 220 : 0,
    padding: props.active ? '20px 20px 0 20px' : 0,
  })
)

const EmailForm = compose(
  withState('showLoginForm', 'setShowLoginForm', false),
)(
  ({
    showLoginForm,
    setShowLoginForm,
    userInput: {
      email,
      password
    },
    isSigningIn,
    onEmailChange,
    onPasswordChange,
    onSignIn,
  }) => {
    return (
      <div>
        <Button
          fluid
          onClick={() => setShowLoginForm(!showLoginForm)}
        >
          Email
        </Button>
        <Wrapper active={showLoginForm}>
          <Form onSubmit={onSignIn}>
            <Form.Input
              label="Email"
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
            />
            <Form.Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => onPasswordChange(e.target.value)}
            />
            <Form.Button fluid loading={isSigningIn}>Sign in</Form.Button>
          </Form>
        </Wrapper>
      </div>
    )
  }
)

EmailForm.propTypes = {}
EmailForm.defaultProps = {}

export default EmailForm

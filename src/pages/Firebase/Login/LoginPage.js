import React from 'react'
import { compose } from 'recompose'
import { Grid, Segment, Button, Divider, Header, } from 'semantic-ui-react'
import withEmailSignIn from '../hocs/withEmailSignIn'
import { signIn } from 'pages/Firebase/functions'
import { withRouter } from 'react-router'
import { routesByValue } from 'utils/constants/routeConstants'

import EmailForm from './EmailForm'

const EnhanceEmailForm = compose(
  withRouter,
  withEmailSignIn({
    getAction: (props) => (email, password) => signIn({ email, password }),
    getOnSuccess: (props) => () => props.router.push(routesByValue.fireBaseApp.getRoute(props.userInput.email))
  }),
)(EmailForm)

const LoginPage = ({}) => {
  return (
    <Grid centered columns={3}>
      <Grid.Column>
        <Segment padded>
          <Header as="h1" size="medium" textAlign="center">Login with</Header>

          <EnhanceEmailForm />

          <Divider horizontal>Or</Divider>
          <Button fluid>Facebook</Button>
        </Segment>
      </Grid.Column>
    </Grid>
  )
}

LoginPage.propTypes = {}
LoginPage.defaultProps = {}

export default LoginPage

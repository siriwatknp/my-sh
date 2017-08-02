import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import withSignOut from '../hocs/withSignOut'
import withUser from '../hocs/withUser'
import { Segment, Button } from 'semantic-ui-react'
import { signOut } from '../functions'
import MenuList from 'pages/Firebase/components/MenuList'
import { Grid } from 'semantic-ui-react'
import { withRouter } from 'react-router'
import withAccessPath from 'store/accessPath/withAccessPath'

const Dashboard = compose(
  withUser(),
  withSignOut({
    getAction: (props) => signOut
  }),
  withAccessPath(),
  withRouter,
)(
  ({
    user,
    children,
    onSignOut,
    router,
    location,
    setAccessPath,
  }) => {
    const handleSignOut = () => {
      setAccessPath('default')
      return onSignOut()
    }
    return (
      <div>
        <Segment>
          Welcome {user.email}
          <Button
            onClick={handleSignOut}
          >
            Log out
          </Button>
        </Segment>
        <Grid>
          <Grid.Column width={4}>
            <MenuList
              menus={[
                { label: 'Account', value: 'account' },
              ]}
              onClick={({ label, value }) => router.push(`${location.pathname}/${value}`)}
            />
          </Grid.Column>
          <Grid.Column width={8}>
            {children}
          </Grid.Column>
        </Grid>
      </div>
    )
  }
)

Dashboard.propTypes = {}
Dashboard.defaultProps = {}

export default Dashboard

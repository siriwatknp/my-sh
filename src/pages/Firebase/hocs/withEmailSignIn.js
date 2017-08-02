import React from 'react'
import { compose, setDisplayName, withState, withProps } from 'recompose'

const withEmailSignIn = ({
  getAction = (props) => (email, password) => Promise.resolve(),
  // getOnRequest = (props) => () => {},
  getOnSuccess = (props) => () => {},
  // getOnFailure = (props) => () => {},
}) => (
  compose(
    setDisplayName('SignInForm'),
    withState('userInput', 'updateUserInput', { email: '', password: '' }),
    withState('isSigningIn', 'setIsSigningIn', false),
    withProps(({
      userInput,
      updateUserInput,
      setIsSigningIn,
      ...props,
    }) => {
      const onSuccess = getOnSuccess({ userInput, ...props })
      return {
        onEmailChange: (email) => updateUserInput({ ...userInput, email }),
        onPasswordChange: (password) => updateUserInput({ ...userInput, password }),
        onSignIn: (e) => {
          const { email, password } = userInput
          if(email && password){
            e.preventDefault()
            setIsSigningIn(true)
            getAction(props)(email, password)
            .then(() => {
              setIsSigningIn(false)
              return onSuccess()
            })
            .catch((err) => {
              console.log('err', err)
              return setIsSigningIn(false)
            })
          }
        }
      }
    })
  )
)

export default withEmailSignIn
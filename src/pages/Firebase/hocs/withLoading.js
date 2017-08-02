import React from 'react'
import { compose, branch, renderComponent } from 'recompose'
import { Loader as SemanticLoader } from 'semantic-ui-react'

const withLoading = ({
  predicate = () => false,
  Loader = () => <SemanticLoader active>Loading...</SemanticLoader>,
}) => (
  compose(
    branch(
      predicate,
      renderComponent(Loader),
    ),
  )
)

export default withLoading
/* eslint-disable arrow-body-style */
import React from 'react'
import invariant from 'invariant'
import {
  compose,
  getContext,
  mapProps,
} from 'recompose'
import PropTypes from 'prop-types'
import { withScreen } from 'components/hocs/withScreen'
import { refComponents, withComponents } from '../utils/componentUtils'

import Title from '../components/Title'
import Subtitle from '../components/Subtitle'
import Section from '../components/Section'
import Container from '../components/Container'
import Columns from '../components/Columns'
import Image from '../components/Image'
import Link from '../components/Link'
import Text from '../components/Text'
// import Heading from '../components/Heading'
// import Div from '../components/Div'
// import Paragraph from '../components/Paragraph'
// import Button from '../components/Button'
// import Divider from '../components/Divider'
// import Card from '../components/Card'

const ElementSwitcher = compose(
  getContext({
    componentById: PropTypes.object,
  }),
  mapProps(({ componentId, componentById }) => {
    // console.log('componentId',componentId)
    // console.log('componentById', componentById);
    invariant(componentById[componentId], `Make sure that you add ${componentId} to componentById`)
    return {
      componentById,
      ...componentById[componentId],
    }
  }),
  withScreen(),
  withComponents(),
)(
  ({
    reference,
    ...props
  }) => {
    switch (reference) {
      case refComponents.TITLE:
        return <Title {...props} />
      case refComponents.SUBTITLE:
        return <Subtitle {...props} />
      case refComponents.SECTION:
        return <Section {...props} />
      case refComponents.CONTAINER:
        return <Container {...props} />
      case refComponents.COLUMNS:
        return <Columns {...props} />
      case refComponents.IMAGE:
        return <Image {...props} />
      case refComponents.LINK:
        return <Link {...props} />
      case refComponents.TEXT:
        return <Text {...props} />
      // case refComponents.HEADING:
      //   return <Heading {...props} />
      // case refComponents.DIV:
      //   return <Div {...props} />
      // case refComponents.PARAGRAPH:
      //   return <Paragraph {...props} />
      // case refComponents.BUTTON:
      //   return <Button {...props} />
      // case refComponents.DIVIDER:
      //   return <Divider {...props} />
      // case refComponents.CARD:
      //   return <Card {...props} />
      default:
        return <div>Cannot find Element</div>
    }
  },
)

ElementSwitcher.propTypes = {}
ElementSwitcher.defaultProps = {}

export default ElementSwitcher

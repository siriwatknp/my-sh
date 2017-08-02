import { extractTextBefore } from 'utils/functions'
import some from 'lodash/some'

const matchSomeWord = (string, matcher, delimeter = '/') => {
  const words = string.split(delimeter)
  return some(words, (value) => matcher === value)
}

export const generateUrlFromAccessPath = ({
  accessPath,
  prefix = 'firebase',
  username,
  resolveUsername = (name) => extractTextBefore(name, '@'),
}) => {
  if(accessPath === 'default' || !matchSomeWord(accessPath, resolveUsername(username), '/')){
    return `/${prefix}/${resolveUsername(username)}`
  }
  return accessPath
}

export const routesByValue = {
  curvedImage: {
    label: 'Curved Image', value: 'curved-image'
  },
  bulma042: {
    label: 'Bulma 0.4.2', value: 'bulma-0.4.2',
  },
  reactDnD: {
    label: 'React DnD', value: 'react-dnd',
  },
  renderingEngine: {
    label: 'Rendering Engine', value: 'rendering-engine',
  },
  reactSemanticUI: {
    label: 'React Semantic UI', value: 'react-semantic-ui'
  },
  firebase: {
    label: 'Firebase', value: 'firebase',
  },
  fireBaseLogin: {
    label: 'login', value: '/firebase/login',
  },
  fireBaseApp: {
    label: 'dashboard',
    value: '/firebase/:user',
    getRoute: (email) => `/firebase/${extractTextBefore(email, '@')}`
  },
  fireBaseAccount: {
    label: 'account',
    value: '/firebase/:user/account',
  }
}

export default [
  routesByValue.curvedImage,
  routesByValue.bulma042,
  routesByValue.reactDnD,
  routesByValue.renderingEngine,
  routesByValue.reactSemanticUI,
  routesByValue.firebase,
]
import { refComponents } from '../utils/componentUtils'
import { background } from '../utils/componentStyles'

export default {
  reference: refComponents.TITLE,
  content: {
    text: {
      en: 'Title',
      th: 'หัวข้อ',
    }
  },
  background,
  defaultSettings: {
    Elm: 'h1',
  },
  deviceSettings: {},
  defaultStyles: {},
  deviceStyles: {},
}

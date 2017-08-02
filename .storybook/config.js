import { configure, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

setAddon(infoAddon);

function loadStories() {
  require('./stories/elements/bases')
  require('./stories/elements/controls')
  require('./stories/elements/fields')
  require('./stories/reviews')
  require('./stories/renderingEngine')
}

configure(loadStories, module);

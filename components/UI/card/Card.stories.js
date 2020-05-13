// import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import { text, select } from '@storybook/addon-knobs'
import USAGE from './USAGE.md'
import Card from './Card.vue'

const label = 'Colors'
const options = {
  Red: 'red',
  Blue: 'blue',
  Yellow: 'yellow',
  Rainbow: ['red', 'orange', 'etc'],
  None: null
}
const defaultValue = 'red'
const groupId = 'GROUP-ID1'

const stories = storiesOf('Card', module)

// stories.addDecorator(withKnobs)

stories.addParameters({
  readme: {
    content: USAGE
  }
})

stories.add('with a button', () => {
  return {
    components: { Card },
    props: {
      title: {
        default: text('title (prop)', 'Hello Storybook')
      },
      icon: {
        default: text('icon (prop)', 'cellphone-link')
      },
      color: {
        default: select(label, options, defaultValue, groupId)
      },
      slot222: { default: text('slot', 'Are you awesome?') }
    },
    template: `<Card :title="slot222" :icon="icon" :color="color">{{ color }}</Card>`
  }
})

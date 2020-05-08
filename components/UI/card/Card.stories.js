// import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
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

const value = select(label, options, defaultValue, groupId)

const stories = storiesOf('Card', module)

stories.addDecorator(withKnobs)

stories.add('with a button', () => {
  return {
    components: { Card },
    props: {
      title: {
        default: text('title (prop)', 'Hello Storybook')
      },
      icon: {
        default: text('icon (prop)', 'aa')
      },
      color: {
        default: value
      }
    },
    data() {
      return {
        slot: text('slot', 'Are you awesome?')
      }
    },
    template: `<Card :title="title" :icon="icon">{{ slot }}</Card>`
  }
})

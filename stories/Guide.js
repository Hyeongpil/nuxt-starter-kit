import { storiesOf } from '@storybook/vue'

// import ButtonReadme from '../components/UI/buttons/README.md'
import IntroduceGuide from './guides/Introduce.md'
import InstallGuide from './guides/Install.md'
import CodeStyleGuide from './guides/CodeStyle.md'

storiesOf('Guide', module)
  .addParameters({})
  .add(
    '1. Introduce',
    () => {
      return {}
    },
    {
      readme: {
        content: IntroduceGuide
      }
    }
  )
  .add(
    '2. Get Started',
    () => {
      return {}
    },
    {
      readme: {
        content: InstallGuide
      }
    }
  )
  .add(
    '3. Project structure',
    () => {
      return {}
    },
    {
      readme: {
        content: CodeStyleGuide
      }
    }
  )
  .add(
    '4. Code Style',
    () => {
      return {}
    },
    {
      readme: {
        content: CodeStyleGuide
      }
    }
  )
  .add(
    '4. How to use Store',
    () => {
      return {}
    },
    {
      readme: {
        content: CodeStyleGuide
      }
    }
  )
  .add(
    '5. How to communicate server ',
    () => {
      return {}
    },
    {
      readme: {
        content: CodeStyleGuide
      }
    }
  )

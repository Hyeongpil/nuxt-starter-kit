import { configure } from '@storybook/vue';

import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import '../assets/scss/buefy/buefy-custom.scss'
// import Icon from 'buefy/dist/components/icon'

import Vue from 'vue'


import 'tailwindcss/dist/tailwind.min.css'
import '../assets/css/tailwind.css'
Vue.use(Buefy)
// Vue.use(Icon)

function loadStories() {
  // const req = require.context('../stories', true, /\.stories\.js$/);
  // req.keys().forEach(filename => req(filename));

  const req2 = require.context('../components/', true, /\.stories\.js$/);
  req2.keys().forEach(filename => req2(filename));
}
configure(loadStories, module);
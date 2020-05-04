<template>
  <section class="section">
    <div class="columns is-mobile">
      <!-- Buefy 샘플 카드 1 -->
      <card title="Free" icon="github-circle">
        Open source on
        <a href="https://github.com/buefy/buefy">GitHub</a>
      </card>

      <!-- Buefy 샘플 카드 2 -->
      <card title="Responsive" icon="cellphone-link">
        <b class="has-text-grey">Every</b>
        component is responsive
      </card>

      <!-- Buefy 샘플 카드 3 -->
      <card title="Modern" icon="alert-decagram">
        Built with
        <a href="https://vuejs.org/">Vue.js</a>
        and
        <a href="http://bulma.io/">Bulma</a>
      </card>

      <!-- Buefy 샘플 카드 4 -->
      <card title="Lightweight" icon="arrange-bring-to-front"
        >No other internal dependency</card
      >
    </div>
  </section>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import Card from '~/components/Card'

@Component({
  name: 'FirstMenuPage',
  components: { Card },
  layout: 'admin'
})
export default class FirstMenuPage extends Vue {}
</script>

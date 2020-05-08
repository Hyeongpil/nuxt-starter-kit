<template>
  <section class="section">
    <h2 class="title is-3 has-text-grey">
      "Just start <b-icon icon="rocket" size="is-large" />"
    </h2>
    <h3 class="subtitle is-6 has-text-grey">
      Author:
      <a href="https://github.com/anteriovieira">
        Antério Vieira
      </a>
    </h3>
  </section>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import Card from '~/components/UI/card/Card.vue'

@Component({
  name: 'InspirePage',
  components: { Card },
  layout: 'admin'
})
export default class Inspire extends Vue {}
</script>
ㅊ

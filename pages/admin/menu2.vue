<template>
  <section class="section">
    두번째 메뉴 섹션
  </section>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import Card from '~/components/Card'

@Component({
  name: 'SecondMenuPage',
  components: { Card },
  layout: 'admin'
})
export default class SecondMenuPage extends Vue {}
</script>

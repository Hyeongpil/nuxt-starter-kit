<template>
  <section class="section">
    <div class="columns is-12 is-multiline">
      <template v-for="(post, index) in posts">
        <card
          :key="index"
          class="column is-3"
          title="Responsive"
          icon="cellphone-link"
        >
          {{ post.body }}
        </card>
      </template>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Card from '~/components/UI/card/Card.vue'
import { postStore } from '@/store'

@Component({
  components: {
    Card
  },
  layout: 'admin',
  async fetch() {
    await postStore.get_posts()
  }
})
export default class SecondMenuPage extends Vue {
  private get posts() {
    return postStore.allPosts
  }
}
</script>

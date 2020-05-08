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

@Component({
  components: {
    Card
  },
  layout: 'admin'
})
export default class FirstMenuPage extends Vue {
  posts: Array<object> = []

  created() {
    this.$repositories.post.all().then((res: any) => {
      if (res.status === 200 && res.data) {
        this.posts = res.data
      } else {
        // Handle error here
      }
    })
  }
}
</script>

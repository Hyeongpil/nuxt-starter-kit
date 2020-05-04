<template>
  <div>
    <navbar-admin />
    <b-tabs
      v-model="activeTab"
      type="is-toggle-rounded"
      position="is-centered"
      size="is-small"
      class="block pt-3"
      @change="openTabContent(activeTab)"
    >
      <template v-for="(item, key) of items">
        <b-tab-item :key="key" :label="item.title" />
      </template>
    </b-tabs>

    <section class="main-content columns ">
      <div class="container column is-10 w-full">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import NavbarAdmin from './components/NavbarAdmin.vue'

@Component({
  components: {
    NavbarAdmin
  }
})
export default class AdminLayout extends Vue {
  activeTab = 0
  items = [
    {
      title: '메뉴1',
      to: { name: 'admin-menu1' }
    },
    {
      title: '메뉴2',
      to: { name: 'admin-menu2' }
    },
    {
      title: '메뉴3',
      to: { name: 'inspire' }
    }
  ]

  /**
   * public
   *
   */
  public openTabContent(index: number): void {
    this.$router.push(this.items[index].to)
  }
}
</script>

<style lang="scss" scoped>
/deep/ .b-tabs .tab-content {
  padding: 0rem;
}
</style>

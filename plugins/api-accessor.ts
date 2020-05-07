/* eslint-disable import/no-mutable-exports */
import { Plugin } from '@nuxt/types'
import createRepository from '~/apis/repository'

let repositories: any

declare module 'vue/types/vue' {
  interface Vue {
    $repositories: any
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $repositories: any
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $repositories: any
  }
}

const repositoryPlugin: Plugin = (context: any, inject) => {
  inject('repositories', createRepository(context.$axios))
  repositories = createRepository(context.$axios)
}

export default repositoryPlugin

export { repositories }

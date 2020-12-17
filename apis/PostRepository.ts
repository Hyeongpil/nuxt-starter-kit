import { NuxtAxiosInstance } from '@nuxtjs/axios'
export default class PostRepository {
  private $axios: NuxtAxiosInstance

  private resource: string = '/posts'

  constructor($axios: NuxtAxiosInstance) {
    this.$axios = $axios
  }

  all() {
    return this.$axios.get(`${this.resource}`)
  }
}

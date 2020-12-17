import { NuxtAxiosInstance } from '@nuxtjs/axios'
import PostRepository from '~/apis/PostRepository'

export default ($axios: NuxtAxiosInstance) => ({
  post: new PostRepository($axios)
})

export interface IRepositorys {
  post: PostRepository
}

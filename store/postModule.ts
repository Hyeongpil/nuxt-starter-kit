/* eslint-disable camelcase */
import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import { repositories } from '~/plugins/api-accessor'
import { IPost } from '~/types/post.interface'

@Module({
  name: 'postModule',
  stateFactory: true,
  namespaced: true
})
export default class PostModule extends VuexModule {
  /**
   * STATE
   */
  public posts: Array<IPost> = []
  public post: IPost | null = null

  @Action
  async get_posts() {
    const res = await repositories.post.all()
    if (res.data) this.SET_POSTS(res.data)
  }

  @Mutation
  public SET_POSTS(posts: Array<IPost>): void {
    this.posts = posts
  }

  get allPosts(): Array<IPost> {
    return this.posts
  }
}

import PostRepository from '~/apis/PostRepository'
import UserRepository from '~/apis/UserRepository'
import CommentRepository from '~/apis/CommentRepository'
import AlbumRepository from '~/apis/AlbumRepository'
import PhotoRepository from '~/apis/PhotoRepository'
import TodoRepository from '~/apis/TodoRepository'

export default ($axios: any) => ({
  post: PostRepository($axios),
  user: UserRepository($axios),
  comment: CommentRepository($axios),
  album: AlbumRepository($axios),
  photo: PhotoRepository($axios),
  todo: TodoRepository($axios)
})

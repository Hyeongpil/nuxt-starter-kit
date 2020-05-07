/* eslint-disable no-unused-vars */
/* eslint-disable import/no-mutable-exports */

import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import postModule from '~/store/postModule'

let postStore: postModule

function initialiseStores(store: Store<any>): void {
  postStore = getModule(postModule, store)
}

export { initialiseStores, postStore }

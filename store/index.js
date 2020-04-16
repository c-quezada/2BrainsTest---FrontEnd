import Vue from 'vue'
import Vuex from 'vuex'

import firebaseModule from './firebase'
import randomUserModule from './users'
import snackbarModule from './snackbar'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    modules: {
      firebase: firebaseModule,
      randomUsers: randomUserModule,
      snackbar: snackbarModule
    }
  })

export default store

import Vue from 'vue'
import Vuex from 'vuex'

import firebaseModule from './firebase'
import snackbarModule from './snackbar'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    modules: {
      firebase: firebaseModule,
      snackbar: snackbarModule
    }
  })

export default store

import Vue from 'vue'
import Vuex from 'vuex'

import firebaseModule from './firebase'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    modules: {
      firebase: firebaseModule
    }
  })

export default store

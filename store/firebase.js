export default {
  namespaced: true,
  state: {
    authUser: {}
  },

  mutations: {
    RESET_STORE: (state) => {
      state.authUser = null
    },

    SET_AUTH_USER: (state, { authUser }) => {
      const { uid, email } = authUser
      // eslint-disable-next-line no-console
      console.log('authUser', { uid, email })

      state.authUser = { uid, email }
    }
  },
  actions: {
    async nuxtServerInit({ dispatch }, ctx) {
      if (this.$fireAuth === null) {
        throw new Error(
          'nuxtServerInit Example not working - this.$fireAuth cannot be accessed.'
        )
      }

      if (ctx.$fireAuth === null) {
        throw new Error(
          'nuxtServerInit Example not working - ctx.$fireAuth cannot be accessed.'
        )
      }

      if (ctx.app.$fireAuth === null) {
        throw new Error(
          'nuxtServerInit Example not working - ctx.$fireAuth cannot be accessed.'
        )
      }

      /** Get the VERIFIED authUser from the server */
      if (ctx.res && ctx.res.locals && ctx.res.locals.user) {
        const { allClaims: claims, ...authUser } = ctx.res.locals.user

        // eslint-disable-next-line no-console
        console.info(
          'Auth User verified on server-side. User: ',
          authUser,
          'Claims:',
          claims
        )

        await dispatch('onAuthStateChanged', {
          authUser,
          claims
        })
      }
    },

    onAuthStateChanged({ commit }, { authUser }) {
      if (!authUser) {
        commit('RESET_STORE')
        return
      }
      commit('SET_AUTH_USER', { authUser })
    }
  },
  getters: {
    isAuthenticated: (state) => !!state.authUser && !!state.authUser.uid
  }
}

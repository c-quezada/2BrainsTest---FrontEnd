import randomUserApi from '@/services/randomUserApi'

export default {
  namespaced: true,
  state: { randomUsers: [] },
  mutations: {
    SET_RANDOM_USERS(state, randomUsers) {
      state.randomUsers = randomUsers
    }
  },
  actions: {
    async getRandomUsers({ commit }) {
      try {
        const response = await randomUserApi().get('?results=12&seed=abc')
        const { results } = response.data

        commit('SET_RANDOM_USERS', results)
        return results
      } catch (error) {
        return error
      }
    }
  }
}

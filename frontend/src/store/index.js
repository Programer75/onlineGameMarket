import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      name: 'Alex',
      surname:'Petrov',
      email:"random@huy.com",
      avaSrc: require(`@/assets/images/user-pict.jpg`),
      },
  },
  getters: {
    GETUSER (state) {
      return state.user
    }
  },
  mutations: {
    setUser (state, payload) {
      state.user = {
        name: payload.name,
        surname: payload.surname,
        email: payload.email,
        avaSrc: require(`@/assets/images/${payload.avaSrc}`)
      };
    }
  },
  actions: {

  },
  modules: {
  }
})

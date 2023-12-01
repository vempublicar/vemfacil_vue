import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      user: null // Aqui você armazenará os dados do usuário logado
    };
  },
  mutations: {
    setUser(state, user) {
      state.user = user; // Mutation para definir o usuário logado (com a letra 's' em minúsculo)
    },
    LOGOUT(state) {
        state.user = null;
        state.jwt = null;
      },
  },
  actions: {
    login({ commit }, user) {
      commit('setUser', user); // Ação para fazer login (com a letra 's' em minúsculo, conforme definido na mutation)
    },
    logoutUser({ commit }) {
        commit('LOGOUT');
        localStorage.removeItem('jwt'); // Remove o token JWT do localStorage
        localStorage.removeItem('user'); // Remove os dados do usuário do localStorage
        // Se você estiver usando outras chaves no localStorage, remova-as aqui também
      }
    // Aqui você pode adicionar ações para buscar dados, etc.
  },
  getters: {
    isAuthenticated(state) {
      return !!state.user && !!state.jwt; // Verifica se o usuário está autenticado
    },
    userName(state) {
      return state.user ? state.user.username : null;
    },
    // Mais getters conforme necessário
  }
});
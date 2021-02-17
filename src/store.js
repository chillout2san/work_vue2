import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gender: '',
    year: '',
    month: '',
    day: '',
    insurance: '',
    condition: '',
    history: '',
    question: ''
  },
  mutations: {
    displayGender(state, gen) {
      if (gen === 0) {
        state.gender = '男性';
      } else {
        state.gender = '女性';
      }
    },
    displayInsurance(state, alt) {
      if (alt === 0) {
        state.insurance = 'はい';
      } else {
        state.insurance = 'いいえ';
      }
    },
    displayCondition(state, alt) {
      if (alt === 0) {
        state.condition = 'はい';
      } else {
        state.condition = 'いいえ';
      }
    },
    displayHistory(state, alt) {
      if (alt === 0) {
        state.history = 'はい';
      } else {
        state.history = 'いいえ';
      }
    }
  }
});

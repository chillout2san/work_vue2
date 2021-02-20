import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gender: '',
    date: '',
    insurance: '',
    condition: '',
    history: '',
    question: ''
  },
  getters: {
    checkGender: state => state.gender,
    checkDate: state => state.date,
    checkInsurance: state => state.insurance,
    checkCondition: state => state.condition,
    checkHistory: state => state.history,
    checkQuestion: state => state.question
  },
  mutations: {
    displayStep1(state, [gender, date]) {
      state.gender = gender;
      state.date = date;
    },
    displayStep2(state, [insurance, condition, history]) {
      state.insurance = insurance;
      state.condition = condition;
      state.history = history;
    },
    displayStep3(state, question) {
      state.question = question;
    }
  }
});

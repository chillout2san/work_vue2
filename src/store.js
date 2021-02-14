import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gender: "",
    year: "",
    month: "",
    day: "",
    insurance: "",
    condition: "",
    history: "",
    question: "",
  },
  mutations: {
    displayGender(gen) {
      if (gen === 1) {
        this.state.gender = "男性";
      } else {
        this.state.gender = "女性";
      }
    },
  },
});

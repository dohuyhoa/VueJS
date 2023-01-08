import { createStore } from "vuex";
import student from "./modules/student";
import auth from "./modules/auth";
export default createStore({
  namespaced: true,
  state: {},
  mutations: {},
  actions: {},
  modules: {student,auth},
});



import {
  getAllStudentApi, createStudentApi, removeStudentApi, updateStudentApi,getSearchStudentApi, deleteStudentApi, editStudentApi, getStudentByFormApi, addStudentApi,
} from '../../apis/student'

const state = () => {
  return {
    studentList: [],
    detailStudent: {},
    isEdited: false,
  }
}
const mutations = {
  setStudentListMutaion(state, payload){
    state.studentList = payload;
  },
  getDetailStudentMutation(state, payload){
    state.detailStudent = payload.data;
  },
  editStudentMutation(state) {
    state.isEdited = true;
  },
  getSearchStudentListMutation(state, payload) {
    state.studentList = payload.data;
  }
}


const actions = {
  async getAllStudentListAction(context) {
    const payload = await getAllStudentApi();
    context.commit("setStudentListMutaion", payload.data)
  },
  async getSearchStudentAction(context, payload) {
    const res = await getSearchStudentApi(payload);
    context.commit("setStudentListMutaion", res)
  },
  async createStudentAction(context, payload) {
    const newStudent = { ...payload, id: Math.random() };
    const res = await createStudentApi(newStudent);
    if (res.status <= 0) {
      alert("Loi roi")
    }
    //gọi lại để lấy danh sách mới về
    context.dispatch("getAllStudentListAction");
  },
  async removeStudentAction(context, payload) {
    const res = await removeStudentApi(payload);
    if (res <= 0) {
      alert("Xoa that bai");
    } else {
      alert("Xoa thanh cong");
      context.dispatch("getAllStudentListAction"); 
    }
  },
  async updateStudentAction(context, payload) {
    const res = await updateStudentApi(payload);
    if (res <=0) {
      alert("Update That bai")
    } else {
      alert("Update thanh cong")
      context.dispatch("getAllStudentListAction");
      context.commit("editStudentMutation");
    }
  },
  async handleDeleteStudentAction(context, payload) {
    const res = await deleteStudentApi(payload);
    console.log(res)
    if (res.status <=0) {
      alert("Xoa That bai")
    } else {
      alert("Xoa thanh cong")
      context.dispatch("getAllStudentListAction");
    }
  },
  async editStudentAction(context, payload) {
    const res = await editStudentApi(payload);
    if (res.status <=0) {
      alert("Edit That bai")
    } else {
      alert("Edit thanh cong")
      context.dispatch("getAllStudentListAction");
      context.commit("editStudentMutation");
    }
  },
  async getDetailStudentAction({commit}, payload) {
    console.log("get detai action")
    console.log(payload)
    const res = await getStudentByFormApi(payload);
    console.log(res)
    if (res.status <=0) {
      alert("Get That bai")
    } else {
      commit("getDetailStudentMutation",res);
    }
  },
  async addStudentAction(context, payload) {
    const res = await addStudentApi(payload);
    if (res.status <= 0) {
      alert("Them that bai");
    }else{
    context.commit("getAllStudentListAction");
    alert("Them moi thanh cong");
    }
  },
  async handleSearchAction(context, payload) {
    const res = await this.getSearchStudentApi(payload);
    if (res.status <= 0) {
      alert("Tim keim that bai");
    } else {
      context.commit("getSearchStudentListMutation",payload);
    }
  },
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
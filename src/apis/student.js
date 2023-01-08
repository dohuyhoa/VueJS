// import axios from "axios"
import axiosAPI from "."

export const getAllStudentApi = () => {
  return  axiosAPI.get("/student")
};
export const getSearchStudentApi =  (keyword) => {
  return  axiosAPI.get(`/student?fullName=${keyword}`)
};
export const getDetailStudentAction = async (id) => {
    return  axiosAPI.get(`/student?fullName=${id}`)
};

export const createStudentApi = async (student) => {
  return  axiosAPI.post("/student",student)
};
export const removeStudentApi = async (id) => {
  return  axiosAPI.delete(`/student/${id}`)
};
export const updateStudentApi = async (student) => {
    return  axiosAPI.put(`/student/${student.id}`, student)
};
export const deleteStudentApi = async (id) => {
    return  axiosAPI.delete(`/student/${id}`)
};
export const editStudentApi = async (id) => {
    return  axiosAPI.get(`/student?studentId=${id}`)
};
export const getStudentApi = async (id) => {
    return  axiosAPI.get(`/student/${id}`)
};
export const getStudentByFormApi = async (id) => {
    console.log("get detai api")
    return  axiosAPI.get(`/student/${id}`)
};
export const addStudentApi = async (student) => {
    return  axiosAPI.post(`/student/`, student)
};

//Neeu ko dung config lai trong index
// export const updateStudentApi = async (student) => {
//   const res = await axios({
//     method: 'PUT',
//     url: `https://63b8a6ff6f4d5660c6dbce75.mockapi.io/student-admin/student/${student.id}`,
//     data: student
//   });
//   return res;
// };
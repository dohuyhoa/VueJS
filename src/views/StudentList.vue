<template>
  <div class="dashboard-content">
    <input type="text" placeholder="seaching..." v-model="keyword" />
    <button class="px-5 mb-3 btn btn-success" @click="handleSearch">
      Search
    </button>
    <div class="d-flex justify-content-between">
      <h1>Danh sach hoc sinh</h1>
      <div>
        <h3 @click="handleAddStudent" class="button border with-icon">
          <i class="sl sl-icon-plus"></i>
          Add Student
        </h3>
      </div>
    </div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Full Name</th>
          <th scope="col">Gender</th>
          <th scope="col">Birthday</th>
          <th scope="col">Phone</th>
          <th scope="col">Address</th>
          <th scope="col">Class</th>
          <th scope="col">Province</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(stu, index) in studentList" :key="index">
          <th scope="row">{{ ++index }}</th>
          <td class="vertical-align-center">{{ stu.fullName }}</td>
          <td class="vertical-align-center">
            {{ stu.Gender % 2 == 0 ? "Nam" : "Nu" }}
          </td>
          <td class="vertical-align-center">{{ stu.birthday }}</td>
          <td class="vertical-align-center">{{ stu.phone }}</td>
          <td class="vertical-align-center">{{ stu.address }}</td>
          <td class="vertical-align-center">{{ stu.class }}</td>
          <td class="vertical-align-center">{{ stu.province }}</td>
          <td>
            <button
              @click="handleDeleteStudent(stu.id)"
              type="button"
              class="btn btn-danger"
            >
              Delete
            </button>
          </td>
          <td>
            <button @click="handleEditStudent(stu.id)" class="btn btn-warning">
              Edit
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const keyword = ref("");
    const store = useStore();
    store.dispatch("student/getAllStudentListAction");
    watch(keyword, (newKeyword) => {
      store.dispatch("student/getAllStudentListAction", newKeyword);
    });
    const studentList = computed(() => store.state.student.studentList);

    const handleDeleteStudent = (id) => {
      store.dispatch("student/handleDeleteStudentAction", id);
    };
    const handleEditStudent = (id) => {
      router.push(`/form-student/${id}`);
    };
    const handleAddStudent = () => {
      router.push(`/form-student/${"add"}`);
    };
    const handleSearch = () => {
      store.dispatch("student/handleSearchAction", keyword);
    };
    return {
      handleSearch,
      studentList,
      handleDeleteStudent,
      keyword,
      handleEditStudent,
      handleAddStudent,
    };
  },
};
</script>

<style>
</style>
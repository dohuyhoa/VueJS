<template>
  <div class="dashboard-content">
    <div class="card">
      <div class="card-body">
        <form class="forms-sample" @submit.prevent="handleSubmitForm">
          <div class="form-group">
            <label for="username">Full name</label>
            <input
              type="text"
              class="form-control"
              id="fullName"
              placeholder="Username"
              v-model="detailStudent.fullName"
            />
          </div>
          <div class="form-group">
            <label for="province">Province</label>
            <input
              name="province"
              type="text"
              class="form-control"
              id="province"
              placeholder="province"
              v-model="detailStudent.province"
            />
          </div>
          <div class="form-group">
            <label for="province">Address</label>
            <input
              name="address"
              type="text"
              class="form-control"
              id="address"
              placeholder="address"
              v-model="detailStudent.address"
            />
          </div>
          <div class="form-group">
            <label for="avatar">Avatar</label>
            <input
              type="text"
              class="form-control"
              id="avatar"
              placeholder="avatar"
              v-model="detailStudent.avatar"
            />
          </div>
          <div class="form-group">
            <label for="">Gender : </label>
            <div class="d-flex ms-2">
              <div class="form-check me-4">
                <label class="form-check-label">
                  <input
                    type="radio"
                    class="form-check-input"
                    name="gender"
                    id="gender"
                    value="0"
                    v-model="detailStudent.gender" />Nam
                  <i class="input-helper"></i
                ></label>
              </div>
              <div class="form-check me-4">
                <label class="form-check-label">
                  <input
                    type="radio"
                    class="form-check-input"
                    name="gender"
                    id="gender"
                    value="1"
                    v-model="detailStudent.gender" />
                  Nữ <i class="input-helper"></i
                ></label>
              </div>
              <div class="form-check me-4">
                <label class="form-check-label">
                  <input
                    type="radio"
                    class="form-check-input"
                    name="gender"
                    id="gender"
                    value="Khác"
                    v-model="detailStudent.gender" />
                  Khác <i class="input-helper"></i
                ></label>
              </div>
            </div>
          </div>
          <button type="submit" class="btn btn-success me-2 p-2 px-5 mt-3">
            Submit
          </button>
          <button @click="handleCancelForm" class="btn btn-light p-2 mt-3 px-5">
            Cancel
          </button>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import { computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const route = useRoute();
    const store = useStore();
    const router = useRouter();
    const isEdited = store.state.student.isEdited;
    watch(isEdited, () => {
      if (store.state.student.isArray) {
        router.push("/student-list");
      }
    });
    store.dispatch("student/getDetailStudentAction", route.params.studentId);
    const detailStudent = computed(() => store.state.student.detailStudent);
    const handleSubmitForm = () => {
      if (route.params.studentId != "add") {
        console.log("update stuendt");
        store.dispatch("student/updateStudentAction", {
          ...store.state.student.detailStudent,
        });
      } else {
        console.log("add stuendt");
        store.dispatch("student/addStudentAction", {
          ...store.state.student.detailStudent,
        });
      }
    };
    const handleCancelForm = () => {
      router.push("/student-list");
    };
    return {
      detailStudent,
      isEdited,
      handleSubmitForm,
      handleCancelForm,
    };
  },
};
</script>

<style>
</style>
import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/DashboardView.vue";
import StudentList from "../views/StudentList.vue";
import SignIn from "../views/SignInView.vue";
import SignUp from "../views/SignUpView.vue";
import FormStudent from "../views/FormStudentView.vue";
// import Dashboard from "../views/DashboardView.vue";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    beforeEnter(to, from, next) {
      console.log(to, from, next);
      const { userLogin } = JSON.parse(localStorage.getItem("userLogin"));
      if (userLogin.type === "ADMIN") {
        next();
      } else {
        next("/");
        alert("Bạn Không có quyền vào trang quản trị");
      }
    },
  },
  {
    path: "/student-list",
    name: "StudentList",
    component: StudentList,
    
  },
  {
    path: "/form-student/:studentId",
    name: "FormStudent",
    component: FormStudent,
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn,
    
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

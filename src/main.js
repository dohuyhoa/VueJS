import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import '../node_modules/jquery/dist/jquery.js'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.js"
import "../node_modules/popper.js/dist/popper.js"

const app = createApp(App);
app.use(store);
app.use(router).mount("#app");

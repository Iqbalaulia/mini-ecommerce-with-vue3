/** @format */

import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
	faInstagram,
	faYoutube,
	faTwitter,
	faFacebook,
	faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import ElementPlus from 'element-plus'
import App from "./App.vue";
import router from "./router/router";
import store from "./store";

library.add(fas, faInstagram, faYoutube, faTwitter, faFacebook, faPinterest);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "jquery";
import "popper.js";
import "./assets/scss/style.scss";
import 'vue3-carousel/dist/carousel.css'
import 'element-plus/dist/index.css'

createApp(App)
	.component("fa", FontAwesomeIcon)
	.use(ElementPlus)
	.use(store)
	.use(router)
	.mount("#app");

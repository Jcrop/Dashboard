import Vue from "vue";
import axios from "axios";

export const axiosIns = axios.create();

Vue.prototype.$http = axiosIns;

export default axiosIns;

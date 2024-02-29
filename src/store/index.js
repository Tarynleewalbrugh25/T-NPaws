import { createStore } from "vuex";
import axios from "axios";
import sweet from "sweetalert";
const lifeURL = "https://t-npaws.onrender.com/";
export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
  },
  mutations: {
    setUsers(state, value) {
      state.users = value;
    },
    setUser(state, value) {
      state.user = value;
    },
    setProducts(state, value) {
      state.products = value;
    },
    setProduct(state, value) {
      state.product = value;
    },
  },
  actions: {
    async fetchProducts(context) {
      try {
        let { results } = (await axios.get(`${lifeURL}products`)).data;
        if (results) {
          context.commit("setProducts", results);
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when retrieving products.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchProduct(context) {
      try {
        let { result } = (await axios.get(`${lifeURL}product`)).data;
        if (result) {
          context.commit("setProducts", result);
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when retrieving products.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    // Other actions...
  },
  modules: {},
});
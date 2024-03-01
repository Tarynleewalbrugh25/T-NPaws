import { createStore } from "vuex";
import axios from "axios";
import sweet from "sweetalert";
const tnURL = "https://t-npaws.onrender.com/";

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
  },
  getters: {},
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
    async fetchUsers(context) {
      try {
        let { results } = (await axios.get(`${tnURL}users`)).data;
        if (results) {
          context.commit("setUsers", results);
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when retrieving users.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchUser(context, info) {
      try {
        let { result } = (await axios.get(`${tnURL}users/${info.id}`)).data;
        if (result) {
          context.commit("setUser", result);
        } else {
          sweet({
            title: "Retrieving a single user",
            text: "User was not found",
            icon: "info",
            timer: 2000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "A user was not found.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async updateUser(context, info) {
      try {
        const { msg } = await (
          await axios.update(`${tnURL}users/user/${info.userID}`, info)
        ).data;
        context.dispatch("fetchUsers");
        sweet({
          title: "Update user",
          text: msg,
          icon: "success",
          timer: 2000,
        });
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when updating a user.",
          icon: "success",
          timer: 2000,
        });
      }
    },
    async deleteUser(context, info) {
      try {
        console.log(info);
        const { msg } = await (
          await axios.delete(`${tnURL}users/user/${info.userID}`)
        ).data;
        context.dispatch("fetchUsers");
        sweet({
          title: "Delete user",
          text: msg,
          icon: "success",
          timer: 2000,
        });
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when deleting a user.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async addUser(context, info) {
      try {
        console.log(info);
        const { msg } = await (
          await axios.add(`${tnURL}users/signup/${info.userID}`)
        ).data;
        context.dispatch("fetchUsers");
        sweet({
          title: "Delete user",
          text: msg,
          icon: "success",
          timer: 2000,
        });
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when deleting a user.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchProducts(context) {
      try {
        let { results } = (await axios.get(`${tnURL}products`)).data;
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
    async fetchProduct(context, info) {
      try {
        let { result } = (await axios.get(`${tnURL}products/${info.id}`)).data;
        if (result) {
          context.commit("setProduct", result);
        } else {
          sweet({
            title: "Retrieving a single product",
            text: "Product was not found",
            icon: "info",
            timer: 2000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "A product was not found.",
          icon: "error",
          timer: 2000,
        });
      }
    },
  },
  // async deleteProduct(context, info) {
  //   try{
  //     console.log(info);
  //     const {msg} = await (await axios.delete(`${tnURL}products/product/${info.prodID}`)).data
  //       context.dispatch('fetchProducts')
  //       sweet({
  //         title: 'Delete product',
  //         text: msg,
  //         icon: "success",
  //         timer: 2000
  //       })
  //   }catch(e) {
  //     sweet({
  //       title: 'Error',
  //       text: 'An error occurred when deleting a product.',
  //       icon: "error",
  //       timer: 2000
  //     })
  //   }
  // },
  async deleteProduct(context, info) {
    try {
      const { msg } = await (
        await axios.delete(`${tnURL}products/product/${info.prodID}`)
      ).data;
      context.dispatch("fetchProducts");
      sweet({
        title: "Delete product",
        text: msg,
        icon: "success",
        timer: 2000,
      });
    } catch (e) {
      sweet({
        title: "Error",
        text: "An error occurred when deleting a product.",
        icon: "error",
        timer: 2000,
      });
    }
  },

  async addProduct(context, info) {
    try {
      let { msg } = await axios.post(`${tnURL}products/addProduct`, info);

      context.dispatch("setProducts");
      sweet({
        title: "Registration",
        text: msg,
        icon: "success",
        timer: 2000,
      });
    } catch (e) {
      sweet({
        title: "Error",
        text: "Please try again later",
        icon: "error",
        timer: 2000,
      });
    }
  },

  modules: {},
});

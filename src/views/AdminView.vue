<template>
    <div>
      <!-- USERS TABLE -->
      <br><h2>Users Table</h2><br>
      <div class="container">
        <table class="table">
          <thead class="table-light">
            <tr>
              <th>User ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>User Age</th>
              <th>Gender</th>
              <th>User Role</th>
              <th>Email Address</th>
              <th>User Profile</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody v-if="users">
            <tr v-for="user in users" :key="user.userID">
              <td>{{ user.userID }}</td>
              <td>{{ user.firstName }}</td>
              <td>{{ user.lastName }}</td>
              <td>{{ user.userAge }}</td>
              <td>{{ user.Gender }}</td>
              <td>{{ user.userRole }}</td>
              <td>{{ user.emailAdd }}</td>
              <td>{{ user.userProfile }}</td>
              <td class="d-flex justify-content-between">
                <button class="btn btn-user deleteButton" @click.prevent="deleteUser(user)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- PRODUCTS TABLE -->
      <br><h2>Products Table</h2><br>
      <addProduct/>
      <div class="container">
        <table class="table">
          <thead class="table-light">
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Product URL</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody v-if="products">
            <tr v-for="product in products" :key="product.prodID">
              <td>{{ product.prodID }}</td>
              <td>{{ product.prodName }}</td>
              <td>{{ product.quantity }}</td>
              <td>R {{ product.amount }}</td>
              <td>{{ product.Category }}</td>
              <td>
                <img :src="product.prodUrl" style="max-width: 100px; max-height: 100px;" />
              </td>
              <td class="d-flex justify-content-between">
                <updateProduct :product="product" />
                <button class="btn btn-product deleteButton" @click.prevent="deleteProduct(product)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
<script>
// import updateProduct from '@/components/UpdateProduct.vue';
// import addProduct from '@/components/AddProduct.vue';
    export default {
     computed: {
    products() {
      return this.$store.state.products;
    },
    users() {
      return this.$store.state.users;
    },
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
    this.$store.dispatch('fetchUsers');
  },
  methods: {
    deleteUser(user) {
      this.$store.dispatch('deleteUser', user);
    },
    deleteProduct(product) {
      this.$store.dispatch('deleteProduct', product);
    },
  }
}
</script>
<style scoped>
td {
  padding: 10px;
}
@media(max-width:351px){
  td {
    padding: 20px;
  }
}
.btn {
  border-radius: 30px;
  color: #fff;
  background-color: #4E96D3;
  font-size: 12px;
  border: none;
  cursor: pointer;
  transition: .4s;
}
.btn:hover{
  background-color: #1D3557;
  color: #fff;
  transition: 1s;
}
</style>
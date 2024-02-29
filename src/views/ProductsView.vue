<template>
    <div class="container">
      <div class="row">
                <div class="col-md-3 ms-auto p-3">
                <input type="text" placeholder="Search product by name" cols="30">
                <button class="rounded-3 m-3">Sort</button>
            </div>
            <div class="row justify-content-center" >
            <Card v-for="info in products" :key="info.id" class="col-md-3 d-flex justify-content-center m-3 ">
             <template #cardHeader >
                  <div class="card-title card-text">{{ info.prodName }}</div>
            </template>
                <template #cardBody>
                  <img :src="info.prodUrl" class="card-img-top w-50" loading="lazy" alt="profile"/>
                  <p class="card-text text-sm">{{ info.Category }}</p>
                  <p>Amount: R{{ info.amount }}</p>
                </template>
            </Card>
        </div>
      </div>
    </div>
  </template>
  <script>
  import Card from '@/components/Card.vue';

  export default {
    // name:'ProductsView',
    components: {
            Card
    },
    computed: {
        products() {
            return this.$store.state.products;
        },
    },
    mounted() {
        this.$store.dispatch('fetchProducts');
    },
};
  </script>
  <style scoped>

  .card-body{
    padding: 0px;
    margin: 0px;
  }
   
  .card-imd-top{
    width: 100%;
  }
   
  img[alt="profile"]{
    height: 150px;
  }
  </style>
<template>
    <div class="container">
      <div class="row">
                <div class="col-md-3 ms-auto p-3">
                <input type="text" placeholder="Search product by name" cols="30">
                <button class="rounded-3 m-3">Sort</button>
            </div>
            <div class="row justify-content-center" >
            <Card v-for="info in product" :key="info.id" class="col-md-3 d-flex justify-content-center m-3 ">
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
      export default {
        // name:'ProductView',
    components: {
        
    },
    computed: {
        product() {
            return this.$store.state.product;
        },
    },
    mounted() {
        this.$store.dispatch('fetchProduct');
    },
};
    
</script>

<style scoped>

</style>
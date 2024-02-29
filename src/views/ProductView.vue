<template>
    <div class="container-fluid">
        <div class="row">
            <div class="diaplsy-3">
                <h2>Product</h2>
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
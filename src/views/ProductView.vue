<template>
    <div class="container">
        <div class="row justify-content-center">
            <Card class="col-md-3 d-flex justify-content-center m-3 ">
                <template #cardHeader>
                    <div class="card-title card-text">{{ product?.prodName }}</div>
                </template>
                <template #cardBody>
                    <img :src="product?.prodUrl" class="card-img-top w-50" loading="lazy" alt="profile" />
                    <p class="card-text text-sm">{{ product?.Category }}</p>
                    <p>Amount: R{{ product?.amount }}</p>
                </template>
            </Card>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
    name: 'ProductView',
    components: {
        Card

    },
    computed: {
        product() {
            return this.$store.state.product;
        },
    },
    mounted() {
        this.$store.dispatch('fetchProduct', this.$route.params);
    },
};

</script>

<style scoped></style>
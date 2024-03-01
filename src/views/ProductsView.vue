<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3 ms-auto p-3">
                <input type="text" @keyup="searchingProduct" v-model="searchData" placeholder="Search product by name" cols="30">
                <button class="rounded-3 m-3" @click="sortProducts">Sort</button>
            </div>
            <div class="front row justify-content-center" v-if="filteredProducts">
                <Card v-for="info in filteredProducts || products" :key="info.id" class="col-md-3 d-flex justify-content-center m-3 ">
                    <template #cardHeader>
                        <div class="card-title card-text">{{ info.prodName }}</div>
                    </template>
                    <template #cardBody>
                        <img :src="info.prodUrl" class="card-img-top w-50" loading="lazy" alt="profile" />
                        <p class="card-text text-sm">{{ info.Category }}</p>
                        <p>Amount: R{{ info.amount }}</p>
                        <button>
                            <router-link :to="{ name: 'product', params: { id: info.prodID } }">View More</router-link>
                        </button>

                    </template>
                </Card>
            </div>
            <div class="row" v-else>
                <Spinner/>
            </div>
        </div>
    </div>
</template>
<script>
import Card from '@/components/Card.vue';
import Spinner from '@/components/Spinner.vue';

export default {
    // name:'ProductsView',

    data() {
        return {
            searchData: '',
            filteredProducts: null,
            sortBy: 'prodName'
        }
    },
    components: {
        Card,
        Spinner
    },
    computed: {
        products() {
            return this.$store.state.products;
        },
    },
    methods: {
        searchingProduct() {
            this.filteredProducts = this.searchData == '' ? this.products :  this.products.filter((prod) => {
                return prod.prodName?.toLowerCase().includes(this.searchData.toLowerCase());
            });
        },
        navigate() {
            this.$router.push('@/ProductView.vue')
        },
        sortProducts() {
            this.filteredProducts?.sort((a, b) => {
                if (a[this.sortBy] < b[this.sortBy]) return 1;
                if (a[this.sortBy] > b[this.sortBy]) return -1;
                return 0;

            })
        }
    },

    created() {
        this.$store.dispatch('fetchProducts');
        this.filteredProducts = this.products
    },

}             

</script>
<style scoped>
.card-body {
    padding: 0px;
    margin: 0px;
}

.card-imd-top {
    width: 100%;
}

img[alt="profile"] {
    height: 150px;
}
</style>
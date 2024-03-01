<template>
    <div class="row justify-content-center">
        <div class="spinner-border " v-if="!fetchData" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div v-else>
    {{ fetchData }}
</div>

    </div>
</template>
 <!-- need to add an  if statement for the spinner  -->
<script>
    export default {
        name:'SpinnerComp',
        data(){
            return{
              fetchData: null
            }
        },
        methods:{
            fetchDataMethod(){
                setTimeout(()=>{
                    this.fetchData = this.$store.dispatch('fetch')
                })
            }
        },
        created(){
            this.fetchDataMethod();
        }
        
    }

</script>

<style scoped>

</style>
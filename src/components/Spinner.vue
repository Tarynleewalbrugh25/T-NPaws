<template>
    <div class="row justify-content-center">
        
        <div class="spinner-border " v-if="display" role="status">
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
               display: 'spinner'
            }
        },
        methods:{
            
        }
        
    }

</script>

<style scoped>

</style>
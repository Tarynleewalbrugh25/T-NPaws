<template>
    <div class="container-fluid">
        <div class="row fixed-bottom">
            <p class="display-2"> Paws by T&N &copy; {{ currentYear }}</p>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'FooterComp',
        data(){
            return{

                currentYear : new Date().getFullYear()

            }
        }
    }
</script>

<style scoped>

</style>
<template>
    <div class="container-fluid">
        <div class="row fixed-bottom" id="footer">
            <p class="text-black"> Paws by T&N &copy; {{ currentYear }}</p>
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
#footer{
    background-color: #A3C18F;
    font-size: medium;
}

</style>
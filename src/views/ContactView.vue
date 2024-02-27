<template>
    <div class="container-fluid vh-100">
        <div class="row d-flex justify-content-center align-items-center">
            <div class="col-md-6 d-block d-flex offset-md-0">
                <h2 class="display-5 text-dark justify-content-center mt-5">Make Your Mark</h2>
                <img class="C-logo img-fluid w-25 me-3 mx-auto p-3" src="https://i.ibb.co/CVPnms3/Screenshot-2024-02-20-144929.png" alt="contactLogo" loading="lazy">
            </div>
        </div>
            <div class="container bg-grey">
                <div class="col-md-6 offset-md-3 m-3 p-2">
                    <form action="" method="post">
                        <div class="input m-1">
                            <textarea input type="text" placeholder="name" cols="100" rows="2"></textarea>
                        </div>
                        <div class="input m-1">
                            <textarea input type="text" placeholder="surname" cols="100" rows="2"></textarea>
                        </div>
                        <div class="input m-1">
                            <textarea input type="text" placeholder="email" cols="100" rows="4"></textarea>
                        </div>
                        <div>
                            <button class="d-block align-bottom text-dark mx-auto text-md-end bg-white">Submit</button>
                        </div>
                    </form>

                </div>
            </div>
        

    </div>
</template>

<script>
    export default {
         name: 'ContactView'
    }
</script>

<style scoped>
.C-logo img[alt="contactLogo"]{
    width: 5rem;
    height: 23px ;
}

</style>
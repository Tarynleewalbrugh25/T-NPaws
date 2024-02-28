<template>
    <div class="container-fluid" id="contact">
        <div class="row d-block d-flex">
            <div class="col-md-6 offset-md-3 m-3 p-2 text-align-center">
                <h2 class="display-6 justify-content-center text-align-center mt-5">Make Your Mark</h2>
                <!-- <img class="C-logo img-fluid w-25 me-3 mx-auto p-3" src="https://i.ibb.co/CVPnms3/Screenshot-2024-02-20-144929.png" alt="contactLogo" loading="lazy"> -->
            </div>
        </div>
            <div class="container mb-3">
                <div class="row d-block d-flex">
                    <div class="col-md-6 offset-md-3 m-3 p-2 text-align-center">
                        <h2 class="">Lets continue to connect</h2>
                        <form action="" method="post">
                            <div class="input m-1">
                                <textarea input type="text" placeholder="Name" cols="50" rows="2"></textarea>
                            </div>
                            <div class="input m-1">
                                <textarea input type="text" placeholder="Surname" cols="50" rows="2"></textarea>
                            </div>
                            <div class="input m-1">
                                <textarea input type="text" placeholder="E-mail" cols="50" rows="2"></textarea>
                            </div>
                            <div class="input m-1">
                                <textarea input type="text" placeholder="Message" cols="50" rows="4"></textarea>
                            </div>
                            <div>
                                <button class="d-block align-bottom text-dark mx-auto text-md-end bg-white" cols="50">Submit</button>
                            </div>
                        </form>
                    </div>
                    </div>
                    <!-- <div class="col">
                        <img class="C-logo img-fluid w-25 me-3 mx-auto p-3" src="https://i.ibb.co/pbZgTsP/cat-footpri.jpg" alt="contactLogo" loading="lazy">
                    </div> -->
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

.container{
    background-color: rgb(151, 151, 151);
    padding: 5px;
    margin: 3rem;
}

/* #contact{
    background-image: url('https://i.ibb.co/pbZgTsP/cat-footpri.jpg') ;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  object-fit: cover;
} */

</style>
<template>
    <div class="container-fluid" id="contact">
        <div class="row d-block d-flex justify-content-center">
            <div class="col-md-6 offset-md-3 m-3 p-2 text-align-center">
                <h2 class="display-3 text-black mt-5 border-black" id="contactMe">Lets continue to connect</h2>
            </div>
        </div>
            <div class="container m-3">
                <div class="row d-block d-flex justify-content-center">
                    <div class="col-md-6 offset-md-3 m-0 p-0 text-align-center" id="pass">
                        <!-- <h2 class="text-black">Lets continue to connect</h2> -->
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
                                <button class="button d-block align-bottom text-dark mx-auto text-md-end bg-white" cols="50">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div class="col">
                        <img class="img-fluid w-50 rounded-3"  src="https://i.ibb.co/D51krQv/IMG-20240228-WA0040.jpg" alt="">
                    </div>
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

.button{
    background-color: #FBBD09;


}

/* #pass{
    background-image: url('https://i.ibb.co/VwCQWWm/1.jpg');
    background-repeat: no-repeat;
    
} */

/* #contact{
    background-image: url('https://i.ibb.co/CVPnms3/Screenshot-2024-02-20-144929.png') ;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  object-fit: cover;
} */


</style>
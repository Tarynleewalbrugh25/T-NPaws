<template>
    <div class="container-fluid" id="contact">
        <div class="row d-block d-flex">
            <div class="col-md-6 offset-md-3 m-3 p-2 justify-content-center text-align-center">
                <h2 class="display-6 text-black text-align-center mt-5">Lets continue to connect</h2>
                <!-- <img class="C-logo img-fluid w-25 me-3 mx-auto p-3" src="https://i.ibb.co/CVPnms3/Screenshot-2024-02-20-144929.png" alt="contactLogo" loading="lazy"> -->
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
                        <!-- <img  src="https://i.ibb.co/VwCQWWm/1.jpg" alt="contactimage"> -->
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

#contact{
    background-image: url('https://i.ibb.co/gyZRFT9/fav-cats.jpg') ;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  object-fit: cover;
}

</style>
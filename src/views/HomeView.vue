<template>
  <div class="container-fluid">
    <div class="row">
      <div class="display-3" id="Home">
        <!-- <h2>Home</h2> -->
          <div class="row justify-content-center m-3 mb-2" id="HomeText">
            <p class="homeText text-dark text-sm-center"></p>
          </div>
          <div class="front row d-block d-flex m-3 mb-5" id="homeImages">
            <div class="col">
              <img class="w-75 rounded-3" src="https://i.ibb.co/WH1FYNG/2nd-fav.jpg" alt="cat&owner">
            </div>
            <div class="col">
              <img class="w-75 rounded-3 " src="https://i.ibb.co/kSW4WWm/cat-owner.jpg" alt="cat&owner">
            </div>
            <div class="col">
              <img class="w-75 rounded-3" src="https://i.ibb.co/gyZRFT9/fav-cats.jpg" alt="cat&owner">
            </div>
          </div>
          <div class="back">

          </div>

      </div>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {},
  mounted(){
    this.typeWriter('name', 'Home is where your pet is');
  },
  methods:{
    typeWriter(targetId, text, speed =100){
      const typer = document.getElementById('HomeText');
  if (typer) {
    let i = 0;
    const typeWriterInterval = setInterval(() => {
      if (i < text.length) {
        typer.innerHTML += text.charAt(i);
        i++;
      } else {
        clearInterval(typeWriterInterval);
      }
    }, speed);
  }
},
},
}
</script>

<style>

/* img[alt="cat&owner"]{
 

  
} */

@media screen and (max-width < 360){
  img [alt="cat&owner"]{
    /* width: 100%;
    max-width: 100%; */
    display: block;
    position: relative;
  }


}

.row img [alt="cat&owner"]{
  position: relative;
  overflow: hidden;
}


/* .row img [alt="cat&owner"] :hover{
  transform: scale(5.3);
  transition: transform 0.5s ease;

} */





</style>

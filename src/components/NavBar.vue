<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary ">
  <div class="container-fluid" id="myNav">
    <img id="Mylogo" class="img-fluid w-25 justify-content-center" src="https://i.ibb.co/GCPTrdc/super-cute-cats-copy.jpg" alt="paws-logo" loading="lazy">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-lg-0 me-5 mx-auto">
        <li class="nav-item">
            <router-link to="/" class="nav-link active">
                Home
            </router-link>
        </li>
        <li class="nav-item">
            <router-link to="/about" class="nav-link active">
                About
            </router-link>
        </li>
        <li class="nav-item">
            <router-link to="/products" class="nav-link active">
                Products
            </router-link>
        </li>
        <li class="nav-item">
            <router-link to="/admin" class="nav-link active">
                Admin
            </router-link>
        </li>
        <li class="nav-item">
            <router-link to="/contact" class="nav-link active">
                Contact
            </router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
    export default {
    name: 'NavBarComp'
        
    }
</script>

<style src="@/assets/css/style.css">

</style>
<script setup>
    import Footer from '../components/Footer.vue';
</script>

<template>
    <div class="grid grid-cols-2 gap-4 mb-32 mt-20">
        <div class="ml-20 mb-20" >
            <h1 
      class="mt-16">SWRV, your awesome movie browsing platform.</h1>
            <p 
      class="mt-10" >SWRV is an online movie browsing platform dedicated to providing you with the latest and freshest film releases. Powered by the moviesDB API, you can expect a fast and reliable list of carefully curated and updated movies. 
     Explore our collection and filter them according to your taste! </p>
        </div>
        <div class="ml-20 mr-5">
           <img src="../assets/gallery/popcorn.jpg" class="  border-8
    yv-img border-F05E24
    md:p-4" 
     >
        
        </div>
       
    </div>
    <Footer/>
</template>

<style scoped>
    h1{
        font-family: satoshi;
        font-size: 50px;
    }

    .tv-img{
   
        border-color: #F05E24;;
    }

    p{
        font-family: monsterrat;
    }
</style>
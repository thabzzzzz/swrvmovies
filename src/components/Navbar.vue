<template>
  

<nav class="bg-white mb-10">
  <div class="max-w-100 flex flex-wrap items-center justify-between mx-auto p-4">
    <router-link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        
        <span class="site-logo"><img src="../assets/gallery/Logo1.png" alt=""></span>
    </router-link>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only ">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-8 rtl:space-x-reverse   bg-white">
        <li class="a">
          <router-link to="/" class="block py-2 px-3   rounded md:bg-transparent md:p-0 nav " aria-current="page">Home</router-link> 
        </li>
       
        <li class="a">
          <router-link to="/movies" class="block py-2 px-3    md:p-0  " aria-current="page">Movies</router-link> 
        </li>
      
      </ul>
    </div>
  </div>
</nav>

</template>

<script setup lang="ts">

</script>

<style scoped>
 .site-logo{
  width: 150px;
  height: 70px;
 }
 .a:after {
  display:block;
  content: '';
  border-bottom: solid 3px var(--orange);  
  transform: scaleX(0);  
  transition: transform 250ms ease-in-out;
}
.a:hover:after { transform: scaleX(1); }


</style>
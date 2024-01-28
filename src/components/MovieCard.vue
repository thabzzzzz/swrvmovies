<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const { movie } = defineProps(['movie']);
const emits = defineEmits(['addToCart']);

const addToCart = () => {
  console.log('Adding to cart:', movie);
  emits('addToCart', movie);
};
</script>

<template>
<!-- component -->
<div class="  py-6 flex flex-col justify-center sm:py-12 m-5">
  
  <div class="py-3 sm:max-w-xl sm:mx-auto">
    <div class="bg-white shadow-lg border-gray-200 	   p-8 flex space-x-8 movie-card hover:border-gray-700 border-transparent border-2">
      <div class="h-60 overflow-visible w-1/2">
        <RouterLink :to="{ name: 'MovieDetails', params: { id: String(movie.id) } }"> <img class=" shadow-lg card-img " :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" :alt="movie.title"></RouterLink>
      </div>
      <div class="flex flex-col w-1/2 space-y-4">
        <div class="flex justify-between items-start">

          <RouterLink :to="{ name: 'MovieDetails', params: { id: String(movie.id) } }">
    <h2 class="font-bold movie-card-title" ><span class="tooltip-text" id="top">I'm a tooltip!</span>{{ movie.title }}</h2>
  </RouterLink>
        
        
        </div>
        <div>
          <div class="text-sm text-gray-400 genre"> {{ movie.type}}</div>
          <div class="text-lg text-gray-800"><p>{{ movie.release_date }}</p></div> <br>
          <div class="bg-white-400 border-2 border-black-900 font-bold  p-2 w-12 text-center ">{{movie.vote_average}}</div>
          <div class="text-sm text-gray-600 genre mt-3 overview"><p>{{ movie.overview}}</p> </div>
          <div class="button-container">
  <RouterLink :to="{ name: 'MovieDetails', params: { id: String(movie.id) } }">
    <h2 class="font-bold movie-card-title">
      <button class="secondaryButton mt-5">More</button>
    </h2>
  </RouterLink>
  <button class="addtocart" @click="addToCart">Add</button>
</div>

          
        </div>
        
      </div>

    </div>
  </div>
  
</div>
</template>

<style scoped>
  .card-img{
    width:330px;
    height: 320px;
   
  }

  .movie-card{
    height: 400px;
  }

 

  .overview {
  display: -webkit-box;
  -webkit-line-clamp: 5; /* Number of lines to show */
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.movie-card-title {
    position: relative;
    display: inline-block; /* Ensure proper behavior of hover action */
  }

  .tooltip-text {
    visibility: hidden;
    position: absolute;
    z-index: 1;
    top: 40px; /* Adjust based on your design */
    left: 50%; /* Adjust based on your design */
    width: 100px;
    color: white;
    font-size: 12px;
    background-color: #192733;
    border-radius: 10px;
    padding: 10px 15px;
    transition: visibility 0.2s ease-in-out; /* Add a transition for smooth visibility */
  }

  /* Ensure the hover effect targets the tooltip text */
  .movie-card-title:hover .tooltip-text {
    visibility: visible;
  }

  @font-face {
    font-family: kanit;
    src: url(../assets/fonts/kanit.ttf);
}

@font-face {
    font-family: monsterrat;
    src: url(../assets/fonts/monsterrat.ttf);
}

@font-face {
    font-family: monsterrat2;
    src: url(../assets/fonts/monsterrat2.ttf);
}


p{
  font-family: monsterrat;
}

h2{
  font-family: monsterrat2;
}

.addtocart {
    padding: 10px;
    margin-left: 15px;
    border: 2px black solid;
    margin-top: 15px;
    font-family: oxygen;
    font-weight: bold;
    font-size: 14px;
    transition: all 0.3s ease; /* Transition for both hover and normal state */
}

.addtocart:hover {
    color: white;
    background-color: #F05E24;
    transition: all 0.3s ease; /* Transition for both hover and normal state */
}

.button-container {
  display: flex;
  align-items: center; /* Align items vertically in the center */
}



.button-container button {
  margin-right: 10px; /* Add some space between the buttons */
}
</style>
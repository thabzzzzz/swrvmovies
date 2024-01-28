<script setup>
    import { ref, onMounted,computed } from 'vue'
   import MovieCard from '../components/MovieCard.vue';
    import autoAnimate from "@formkit/auto-animate"
    import Footer from '../components/Footer.vue'; 
    import { useCartStore } from '../store/cartStore'
   
    import { inject } from 'vue';

const $toast = inject('$toast');

    


    const movieList = ref([]);
    const isLoading = ref(true);
    const selectedSort = ref('');
    let container= ref();
    const searchQuery = ref('');


    onMounted(async () => {
    const apiKey = '672d8a2f825f32332973ed7e2de2efa1'; // Replace with your actual TMDb API key
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${apiKey}`;
    
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      movieList.value = data.results;
      isLoading.value = false;
    } catch (error) {
      console.error("Error fetching movies:", error);
      isLoading.value = false;
    }
  });

  const filteredMovies = computed(() => {
  const query = searchQuery.value.toLowerCase();
  return movieList.value.filter(movie => {
    // Filter based on title or any other property you want
    return movie.title.toLowerCase().includes(query);
  });
});

const sortOrder = ref('asc'); 


const sortMovies = () => {
  if (selectedSort.value === 'name') {
    movieList.value.sort((a, b) => a.title.localeCompare(b.title));
  } else if (selectedSort.value === 'rating') {
    movieList.value.sort((a, b) => b.vote_average - a.vote_average);
  } else if (selectedSort.value === 'release_date') {
    movieList.value.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
  } else if (selectedSort.value === 'popularity') {
    movieList.value.sort((a, b) => b.popularity - a.popularity);
  }
  // Add more conditions for other sorting options

  autoAnimate(container.value);
};



  const cartStore = useCartStore();

  const handleAddToCart = (movie) => {
  cartStore.addToCart(movie);
  $toast.open({
    message: `Added to backlog`,
    type: 'success',
    
  });
};


const cartItemCount = computed(() => {
  const count = cartStore.cart.length;
 
  
  return count;
});


</script>

<template>
    <div  >
      <h2 class="line-divider font-2xl"><span class="">Trending</span></h2>
      <div class="flex items-center justify-center mb-4" >


        <!-- class="peer h-15 w-full  border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"> -->
    

    <div class="relative h-10 w-72 min-w-[200px]">
      <select v-model="selectedSort" @change="sortMovies" class="peer h-15 w-full  border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
  <option value="">Select</option>
  <option value="name">Name</option>
  <option value="rating">Rating</option>
  <option value="release_date">Release Date</option>
  <option value="popularity">Popularity</option>
  <!-- Add more options as needed -->
</select>

  <label
    class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5  before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow  after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
    Sort by
  </label>
</div>
<input v-model="searchQuery" placeholder="Search movies..." class="border border-gray-300 p-2 h-11 " id="search-box"/>


<router-link to="/cart" class="border border-solid border-gray-300 cartlink">
  <div class="ml-4 ">Watchlist: {{ cartItemCount }}</div>
</router-link>
    </div>
      <div class="max-w-sm mx-auto" v-if="isLoading" >
        <span class="text-2xl font-bold text-black-700"  >Now loading...</span>
      </div>
      
      <div class="grid grid-cols-3" ref="container" >
      <MovieCard v-for="movie in filteredMovies" :key="movie.id" :movie="movie"  @addToCart="handleAddToCart"/>
    </div>
    </div>
    <Footer />
</template>

<style scoped>
@font-face {
    font-family: oxygen;
    src: url(../assets/fonts/oxygen.ttf);
}
    .heading{
        font-size: 60px;
        font-family: oxygen;
    }

    h2 {
   width: 100%; 
   text-align: center; 
   border-bottom: 4px solid #000; 
   line-height: 0.1em;
   margin: 10px 0 20px; 
  
} 

h2 span { 
    background:#fff; 
    padding:0 10px; 
    font-size: 40px;
    top:5px;
    position: relative;
    font-family: satoshi;
    
}
.line-divider{
  margin-bottom: 40px;
}
select {
    line-height: 1.5; /* Adjust this value to increase/decrease line height */
  }

  #search-box{
    top: 1.5px;
    position: relative;
  }

  .cartlink{
    padding-right: 19px;
    padding-top: 13px;
    padding-bottom: 9px;
    margin-top: 2px;
    border-color: #000000;
    border-width: 2px;
  font-family: monsterrat2;
  margin-left: 1200px;
  }
  
  
</style>
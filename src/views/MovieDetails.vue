<template>
    <section>
      <div class="container">
        <div class="text-bold" v-if="isLoading">Now loading..</div>
        <div v-else>
          <div class="grid grid-cols-2 gap-2 mb-10">
            <div class="ml-10 first-col">
              <h1 class="heading">{{ queryMovie.title }}</h1>
              <div>
                <img
                  class="poster"
                  :src="`https://image.tmdb.org/t/p/original${queryMovie.poster_path}`"
                  :alt="queryMovie.title"
                />
              </div>
            </div>
            <div class="ml-10 movie-details">
              <div class="deets">
                <i class="bi bi-hourglass mr-2"></i>
                <span class="inline-block"><p class="font-bold">{{ queryMovie.runtime }} mins</p></span>
              </div>
              <br />
              <div class="deets">
                <i class="bi bi-calendar mr-2"></i>
                <span class="inline-block"><p class="font-bold">{{ queryMovie.release_date }}</p></span>
              </div>
              <div class="deets">
                <br /><p>{{ queryMovie.overview }}</p>
                <br>
                <div class="flex justify-between mb-1">
                  <span class="font-medium"><p class="font-bold">User score: {{ userRating.toFixed(1) }} / 10</p></span>
                </div>
                <div class="w-56 bg-gray-200 rounded-full h-2.5 ">
                  <div
                    class="h-2.5 rounded-full"
                    :style="{ width: userRatingPercentage + '%', background: progressBarColor }"
                  ></div>
                </div>
              </div>
              <div class="deets">
                <span v-for="(genre, index) in queryMovie.genres" :key="index" class="badge text-s font-medium me-2 px-2.5 py-0.5 rounded-full">
                  {{ genre.name }}
                </span>
                <br>
               
              </div>
              <br>
              <div class="deets">
                <i class="bi bi-collection-play-fill"></i>
                <span class="inline-block">
                  <button @click="openModal"><p class="font-bold ml-5">Play trailer</p></button>
                </span>
              </div>
              <br>
          
              <div class="deets">
                <button class="secondaryButton mt-5" @click="$router.back()">
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      <teleport to="body">
      <Modal v-if="modalStore.show">
        <p>This is the modal content.</p>
      </Modal>
    </teleport>
<div>
    

    
  </div>
    </section>
    <Footer />
 
  </template>
  
  <script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { defineProps } from 'vue';
import Footer from '../components/Footer.vue';
import Modal from '../components/Modal.vue';
import { useModalStore } from '../store/modalStore.js';
import { useMovieStore } from '../store/movieStore.js'; // Import the movie store

const modalStore = useModalStore();
const movieStore = useMovieStore(); // Use the movie store

// Use modalStore.show instead of ref(true)
const show = computed(() => modalStore.show);

const openModal = () => {
  console.log('view true');
  modalStore.openModal();
};


const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const queryMovie = ref([]);
const isLoading = ref(true);
const userRating = ref(0);
const userRatingPercentage = ref(0);
const router = useRouter();


const userRatingColors = [
  { percent: 0, color: '#FF0000' },
  { percent: 25, color: '#FF6B5E' },
  { percent: 50, color: '#FFC2A6' },
  { percent: 75, color: '#C8FFB3' },
  { percent: 90, color: '#95FF66' },
  { percent: 100, color: '#00FF00' },
];

const progressBarColor = computed(() => {
  for (let i = 0; i < userRatingColors.length - 1; i++) {
    if (userRatingPercentage.value <= userRatingColors[i].percent) {
      return userRatingColors[i].color;
    }
  }
  return userRatingColors[userRatingColors.length - 1].color;
});

const showTrailer = () => {
  // Logic to show the trailer or open the modal
  showModal.value = true;
};

onMounted(async () => {
  try {
    const movieId = props.id;
    const apiKey = '672d8a2f825f32332973ed7e2de2efa1';
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`);
    const data = await response.json();

    if (response.ok) {
      queryMovie.value = data;

      // Assuming your API provides average rating out of 10
      userRating.value = data.vote_average;

      // Calculate percentage based on a scale of 10
      userRatingPercentage.value = (userRating.value / 10) * 100;
      movieStore.setQueryMovie(data);
    } else {
      router.push({ name: 'NotFound' });
    }

    isLoading.value = false;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    isLoading.value = false;
  }
});

</script>

  
  <style scoped>
  h1 {
    margin-bottom: 40px;
  }
  
  @font-face {
    font-family: kanit;
    src: url(../assets/fonts/kanit.ttf);
  }
  
  @font-face {
    font-family: monsterrat;
    src: url(../assets/fonts/monsterrat.ttf);
  }
  
  .first-col {
    display: flex;
    flex-direction: column;
    align-items: center; /* Align items in the center horizontally */
  }
  
  .heading {
    font-size: 60px;
    font-family: kanit;
    text-align: center;
  }
  
  .poster {
    height: 600px;
    width: 400px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  
  .movie-details {
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Align items to the left */
    justify-content: flex-end; /* Align to the bottom */
    align-self: stretch; /* Stretch to the full height of the parent container */
    height: 600px; /* Set a fixed height or adjust based on your layout */
    margin-left: 10px; /* Add margin for spacing between image and movie details */
  }
  
  .deets {
    /* Adjust styling for individual items */
    margin-bottom: 20px; /* Space between items */
  }
  
  p {
    font-family: monsterrat;
  }
  
  .badge {
    border: 2px #F05E24 solid;
  }
  
  p {
    font-family: monsterrat;
  }
 
  </style>
  
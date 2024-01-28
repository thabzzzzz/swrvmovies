<!-- Modal.vue -->
<template>
  <div v-if="modalStore.show" class="modal">
    <div class="modal-content">
      <button @click="closeModal" class="close-button"><p class="font-bold">Close</p></button>
      <iframe :src="trailerUrl" class="trailer-iframe" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useModalStore } from '../store/modalStore'; // Adjust the path as needed
import { useMovieStore } from '../store/movieStore';

const modalStore = useModalStore();
const movieStore = useMovieStore();
const queryMovie = movieStore.queryMovie;

const closeModal = () => {
  console.log('modal false');
  modalStore.toggleModal(false);
};

const trailerUrl = ref('');

onMounted(async () => {
  try {
    // Extract relevant data from the movie API response
    const { title, release_date } = queryMovie;

    // Extract the release year from the release date
    const releaseYear = release_date ? new Date(release_date).getFullYear() : '';

    // Construct a search query for YouTube using the title and release year
    const searchQuery = encodeURIComponent(`${title} official trailer ${releaseYear}`);

    // Use the YouTube Data API to search for the trailer
    const apiKey = 'AIzaSyC7UEh4uRpo1slT7RB_BNlPMKAAsBQcuRQ';
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?q=${searchQuery}&type=video&part=snippet&key=${apiKey}`
    );

    // Extract the trailer video ID from the API response
    const trailerVideoId = response.data.items[0]?.id.videoId;

    // Construct the trailer URL
    trailerUrl.value = trailerVideoId ? `https://www.youtube.com/embed/${trailerVideoId}?autoplay=1` : '';
  } catch (error) {
    console.error('Error fetching trailer:', error);
  }
});
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  position: relative; /* Added for proper positioning */
  background: white;
  padding: 40px;
  border-radius: 8px;
}
.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: #F05E24;
}

.trailer-iframe {
  width: 100vh;
  height: 80vh; /* Adjust the height as needed */
}
</style>

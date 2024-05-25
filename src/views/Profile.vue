<template>
  <div class="container mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6">Perfil</h1>
    <div v-if="loading">Cargando...</div>
    <div v-else>
      <div>
        <p><strong>Nombre:</strong> {{ user.name }}</p>
        <p><strong>Apellido:</strong> {{ user.lastName }}</p>
        <p><strong>DNI:</strong> {{ user.dni }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
      </div>
      <div class="mt-8">
        <h2 class="text-2xl font-bold mb-4">Reservas</h2>
        <div v-if="bookingsLoading">Cargando...</div>
        <div v-else>
          <div v-if="bookingsLoading.length === 0">No hay reservas.</div>
          <ul v-else>
            <li v-for="booking in bookings" :key="booking.id">
              <p><strong>Actividad:</strong> {{ booking.name }}</p>
              <p><strong>Fecha:</strong> {{ booking.date }}</p>
              <p><strong>Hora:</strong> {{ booking.time }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getOwnProfile } from '../services/profileService.js'
import { getOwnBooking } from '../services/bookingService.js'

const user = ref('')
const userLoading =ref(true)

const bookings = ref([])
const bookingsLoading = ref(true)

onMounted( async () => {
  try {
    await getOwnProfile(user)
    loading.value = false
  } catch (error) {
    console.error('Error fetching profile:', error)
    loading.value = false
  }
  try {
    await getOwnBooking(bookings)
    bookingsLoading.value = false
  } catch (error) {
    console.error('Error fetching bookings:', error)
    bookingsLoading.value = false
  }
})


</script>

<style scoped>

</style>
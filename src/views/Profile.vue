<template>
  <div class="container mx-auto p-6 h-1/2">
    <h1 class="text-3xl font-bold mb-6">Perfil</h1>
    <div v-if="loading" class="text-center">Cargando...</div>
    <div v-else>
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <p><strong>Nombre:</strong> {{ user.name }}</p>
          <p><strong>Apellido:</strong> {{ user.lastName }}</p>
          <p><strong>DNI:</strong> {{ user.dni }}</p>
          <p><strong>Email:</strong> {{ user.email }}</p>
        </div>
        <div>
          <h2 class="text-2xl font-bold mb-4">Reservas:</h2>
          <div v-if="bookings.length === 0" class="text-center">No hay reservas.</div>
          <ul v-else>
            <li v-for="booking in bookings" :key="booking.id" class="mb-4 border-b pb-4">
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

const user = ref('')
const loading = ref(true)


onMounted(async () => {
  try {
    await getOwnProfile(user)
  } catch (error) {
    console.error('Error fetching profile:', error)
  } finally {
    loading.value = false
  }
})

</script>


<style scoped>

</style>
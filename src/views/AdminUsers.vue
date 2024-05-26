<!-- src/views/AdminUsers.vue -->
<template>
  <div class="container mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6">Users</h1>
    <div v-if="loading">Loading users...</div>
    <div v-else>
      <ul>
        <li v-for="user in users" :key="user.id">
          <button 
            @click="selectUser(user)"
            class="mt-8"
          >
            {{ user.name }} ({{ user.email }})
          </button>
        </li>
      </ul>
    </div>
    
    <div v-if="selectedUser">
      <h2 class="text-2xl font-bold mt-8">Bookings for {{ selectedUser.name }}</h2>
      <div v-if="bookingsLoading">Loading bookings...</div>
      <div v-else>
        <ul>
          <li v-for="booking in bookings" :key="booking.id">
            <p><strong>Activity:</strong> {{ booking.name }}</p>
            <p><strong>Date:</strong> {{ booking.date }}</p>
            <p><strong>Time:</strong> {{ booking.time }}</p>
            <button 
              @click="deleteBooking(selectedUser.id, booking.id)"
              class="mt-8"
            >
              Delete Booking
            </button>
          </li>
        </ul>
        <form @submit.prevent="addBooking">
          <h3 class="text-xl font-bold mt-4">Add Booking</h3>
          <input v-model="newBooking.classId" placeholder="Class ID" required class="border-2 border-primary p-2" />
          <button 
            type="submit" 
            class="bg-primary text-white p-2 mt-2"
          >
            Add Booking
        </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { adminCreateBooking, adminDeleteBooking } from '../services/bookingService.js'
import { getAllUsers, getUserBookings } from '../services/userService.js'

const users = ref([])
const loading = ref(true)
const selectedUser = ref(null)
const bookings = ref([])
const bookingsLoading = ref(false)
const newBooking = ref({ classId: '' })

onMounted(async () => {
  try {
    users.value = await getAllUsers()
    loading.value = false
  } catch (error) {
    console.error('Error fetching users:', error)
    loading.value = false
  }
})

const selectUser = async (user) => {
  selectedUser.value = user
  bookingsLoading.value = true
  try {
    bookings.value = await getUserBookings(user.id)
    bookingsLoading.value = false
  } catch (error) {
    console.error('Error fetching bookings:', error)
    bookingsLoading.value = false
  }
}

const addBooking = async () => {
  try {
    await adminCreateBooking(selectedUser.value.id, newBooking.value)
    bookings.value = await getUserBookings(selectedUser.value.id)
    newBooking.value.classId = ''
  } catch (error) {
    console.error('Error adding booking:', error)
  }
}

const deleteBooking = async (userId, bookingId) => {
  try {
    await adminDeleteBooking(userId, bookingId)
    bookings.value = await getUserBookings(userId) // Refresh bookings
  } catch (error) {
    console.error('Error deleting booking:', error)
  }
}
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>

<template>
  <div class="container mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6">Reserva tus clases</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 items-center">
      <div class="timetable">
        <div class="flex justify-between mb-2">
          <button @click="prevWeek" class="bg-primary text-white px-4 py-2 rounded-md"> Previa </button>
          <button @click="nextWeek" class="bg-primary text-white px-4 py-2 rounded-md"> Siguiente </button>
        </div>
        <table class="w-full table-auto">
          <thead>
            <tr>
              <th class="px-4 py-6">Time</th>
              <th class="px-4 py-6" v-for="day in days" :key="day">
                {{ day }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(time, index) in times" :key="index">
              <td class="border px-4 py-6">
                {{ time }}
              </td>
              <td v-for="day in days" :key="day" class="border px-4 py-6">
                <div v-if="getActivity(day, time)">
                  <span @click="bookClass(day, time)" class="cursor-pointer">
                    {{ getActivity(day, time).name }}
                  </span>
                </div>
                <div v-else>
                  <span>-</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getAllClasses } from '../services/classService.js'
import { createBooking } from '../services/bookingService.js'

const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']
const times = ['08:00 AM', '10:00 AM', '12:00 PM', '04:00 PM', '06:00 PM', '08:00 PM']

const activities = [
  { name: 'Zumba', day: 'Lunes', time: '08:00 AM' },
  { name: 'Zumba', day: 'Miercoles', time: '08:00 AM' },
  { name: 'Zumba', day: 'Viernes', time: '08:00 AM' },
  { name: 'Yoga', day: 'Martes', time: '10:00 AM' },
  { name: 'Yoga', day: 'Jueves', time: '10:00 AM' },
  { name: 'Crossfit', day: 'Lunes' , time: '12:00 PM' },
  { name: 'Crossfit', day: 'Miercoles' , time: '12:00 PM' },
  { name: 'Crossfit', day: 'Viernes' , time: '12:00 PM' },
  { name: 'BodyCombat', day: 'Martes', time: '08:00 PM' },
  { name: 'BodyCombat', day: 'Jueves', time: '08:00 PM' },
  { name: 'Spinning', day: 'Lunes', time: '06:00 PM' },
  { name: 'Spinning', day: 'Miercoles', time: '06:00 PM' },
  { name: 'Spinning', day: 'Viernes', time: '06:00 PM' },
  { name: 'Crossfit', day: 'Sabado' , time: '10:00 AM' }
]

//const activities = ref([])


const getActivity = (day, time) => {
  return activities.find(activity => activity.day === day && activity.time === time);
}

const bookClass = (day, time) => {
  const activity = getActivity(day, time);
  if (activity) {
    alert(`You have booked ${activity.name} on ${day} at ${time}`);
  } else {
    alert('No class available to book at this time.');
  }
}

const prevWeek = () => {
  alert('Show previous week\'s schedule');
}

const nextWeek = () => {
  alert('Show next week\'s schedule');
}
</script>

<style scoped>
</style>

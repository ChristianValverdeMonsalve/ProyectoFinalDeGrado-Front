<template>
  <div class="container mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6">ACTIVIDADES DIRIGIDAS</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="activity in activities" :key="activity.name" 
        class="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
      >
        <h2 class="text-xl font-semibold mb-2">
          {{ activity.name }}
        </h2>
        <p class="text-gray-700">
          {{ activity.description }}
        </p>
        <button class="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-700"
          @click="goToBooking"
        >
          Reservar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const activities = [
  { name: 'Zumba', description: 'Un entrenamiento de baile de alta energía que combina música latina e internacional con movimientos de baile divertidos.' },
  { name: 'Yoga', description: 'Una práctica de mente y cuerpo con una historia de 5,000 años en la filosofía india antigua, que incluye ejercicios de respiración, meditación y posturas.' },
  { name: 'Crossfit', description: 'Un entrenamiento de fuerza y acondicionamiento que combina entrenamiento en intervalos de alta intensidad, levantamiento de pesas olímpico y powerlifting.' },
  { name: 'BodyCombat', description: 'Un entrenamiento de artes marciales de alta energía que es totalmente sin contacto, con movimientos de Karate, Taekwondo, Boxeo, Muay Thai, Capoeira y Kung Fu.' },
  { name: 'Spinning', description: 'Un entrenamiento de ciclismo de alta intensidad que mejora la condición física cardiovascular, la resistencia muscular y la fuerza.' },
  { name: 'Aquagym', description: 'Un ejercicio acuático que combina movimientos aeróbicos con la resistencia natural del agua para mejorar la condición física y la tonificación muscular.' }
]

const router = useRouter()

const goToBooking = () => {
  router.push({ path: '/booking' })
}
</script>

<style scoped>

</style>
<template>
  <div class="w-full bg-primary h-16 flex justify-between items-center px-4 text-white">
    <div @click="goToHome" class="cursor-pointer">
      GymUp
    </div>
    <ul class="flex gap-6 w-3/5 justify-center items-center h-full">
      <li>
        <button @click="goToProfile">
          Perfil
        </button>
      </li>
      <li>
        <button @click="goToBooking">
          Reservar clase
        </button>
      </li>
      <li>
        <button @click="goToActivities">
          Actividades
        </button>
      </li>
      <li>
        <button @click="goToContact">
          Contacto
        </button>
      </li>
    </ul>
    <button v-if="!isLoggedIn" @click="goToLogin" class="focus:outline-none">
      Login
    </button>
    <ButtonLogout v-else />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import ButtonLogout from './ButtonLogout.vue'
import { ref, computed } from 'vue'

const router = useRouter()

const goToHome = () => {
  router.push({ path: '/'})
}

const goToBooking = () => {
  router.push({ path: '/booking' })
}

const goToActivities = () => {
  router.push({ path: '/activities' })
}

const goToContact = () => {
  router.push({ path: '/contact' })
}

const goToLogin = () => {
  router.push({ path: '/login' })
}

const goToProfile = () => {
  router.push({ path: '/profile' })
}

const isLoggedIn = computed(() => {
  return !!localStorage.getItem('token')
})
</script>

<style scoped>

</style>
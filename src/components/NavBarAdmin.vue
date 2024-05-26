<template>
  <div class="w-full bg-primary h-16 flex justify-between items-center px-4 text-white">
    <div @click="goToHome" class="cursor-pointer">
      GymUp
    </div>
    <ul class="flex gap-6 w-3/5 justify-center items-center h-full">
      <li>
        <button @click="goToUsers">
          Usuarios
        </button>
      </li>
      <li>
        <button @click="goToAddActivity">
          Actividades
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
import { computed } from 'vue'

const router = useRouter()

const goToHome = () => {
  router.push({ path: '/' })
}

const goToUsers = () => {
  router.push({ path: '/admin/users' }) // Define the route for the users page
}

const goToAddActivity = () => {
  router.push({ path: '/admin/activities' }) // Define the route for adding activities
}

//const isLoggedIn = computed(() => {
//  return !!localStorage.getItem('token')
//})

</script>

<style scoped>

</style>

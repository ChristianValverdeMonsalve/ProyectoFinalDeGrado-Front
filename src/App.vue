<template>
  <div class="h-screen">
    <NavBarAdmin v-if="isAdmin"/>
    <NavBar v-else/>
    <RouterView />
    <Footer />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import NavBar from "./components/NavBar.vue"
import Footer from "./components/Footer.vue"
import NavBarAdmin from "./components/NavBarAdmin.vue"

const route = useRoute()

const checkAdmin = computed(() => {
  return route.path.startsWith('/admin')
})

</script>
<template>
  <div class="w-full bg-primary h-16 flex justify-between items-center px-4 text-white">
    <div>
      GymUp
    </div>
    <ul class="flex gap-6 w-3/5 justify-center items-center h-full">
      <li @click="() => {store.current = idx}">
        Reservar clase
      </li>
      <li>
        Actividades
      </li>
      <li>
        Contacto
      </li>
    </ul>
    <div>
      Login
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>
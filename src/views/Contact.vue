<template>
  <div class="flex justify-center items-center h-screen">
    <div class="text-center w-1/2">
      <h1 class="text-5xl font-bold mb-10">Contacto</h1>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label 
            for="name" 
            class="block text-xl font-medium text-gray-700"
          >
              Nombre
          </label>
          <input 
            type="text" 
            id="name" 
            v-model="formData.name" 
            class="mt-1 block w-full shadow-sm 2xl:text-2xl rounded-md"
          >
        </div>
        <div class="mb-4">
          <label 
            for="email" 
            class="block text-xl font-medium text-gray-700"
          >
              Email
          </label>
          <input 
            type="email" 
            id="email" 
            v-model="formData.email" 
            class="mt-1 block w-full shadow-sm 2xl:text-2xl border-gray-300 rounded-md"
          >
        </div>
        <div class="mb-4">
          <label 
            for="message"   
            class="block text-xl font-medium text-gray-700"
          >
              Mensaje
          </label>
          <textarea 
            id="message" 
            v-model="formData.message" 
            class="mt-1 block w-full shadow-sm 2xl:text-2xl border-gray-300 rounded-md"
          >
          </textarea>
        </div>
        <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">Enviar</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const formData = ref({
  name: '',
  email: '',
  message: ''
});

const submitForm = () => {
  // Logic to submit form data (e.g., send to backend API)
  console.log(formData.value);
};
</script>

<style scoped>
/* Add any additional scoped styles here */
</style>

<template>
  <div class="flex items-center justify-center h-[85%]">
    <div class="flex flex-col gap-6 w-[30%] ">
      <input 
        type="text"
        placeholder="Username"
        :value="userName"
        class="border-2 border-primary p-2"
      />
      <input 
        :type="isVisible ? 'text' : 'password'"
        placeholder="Password"
        :value="password"
        :fn="handleVisibility"
        class="border-2 border-primary p-2"
      />
      <div class="flex justify-between w-full px-2">
        <div class="flex items-center gap-2">
          <input type="checkbox">
          <span class="text-sm">Remember me</span>
        </div>
        <div>
          <span class="text-sm"><a href="#" class="text-primary">Forgot your password?</a></span>
        </div>
      </div>
      <div class="w-full px-2 flex justify-center">
        <button class="w-1/2 bg-primary text-white rounded-lg p-2" @click="handleLogin">
          Iniciar sesion
        </button>
      </div>
    </div>
    </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { useStore } from "../store"

import { login } from "../services/authService.js"

const router = useRouter()
const store = useStore()

const userName = ref("")
const password = ref("")

let isVisible = ref(false)

const handleVisibility = () => {
  isVisible.value = !isVisible.value
}

const handleLogin = async () => {
  try {
    const { result } = await login({ email: userName.value, password: password.value })
    if (result.user.roles.includes("admin")) {
      router.push("/users")
    } else {
      router.push("/profile")
    }
  } catch (error) {
    console.error(error)
  }
}

</script>

<style scoped>

</style>
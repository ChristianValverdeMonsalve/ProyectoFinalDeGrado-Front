<template>
  <div class="flex items-center justify-center h-[85%]">
    <div class="flex flex-col gap-6 w-[30%] ">
      <div class="flex w-full">
        <Input 
          type="text"
          placeholder="Username"
          :value="userName"
          v-model="userName"
          styles="w-full mr-2 border-l-0 rounded-l-none focus:outline-none"
        />
      </div>
      <div class="flex w-full ">
        <Input 
          :type="isVisible ? 'text' : 'password'"
          placeholder="Password"
          :value="password"
          v-model="password"
          styles="w-full border-x-0 rounded-none focus:outline-none"
        />
      </div>
      <div class="flex justify-between w-full px-2">
        <div class="flex items-center gap-2">
          <input type="checkbox">
          <span class="text-sm">Remember me</span>
        </div>
        <div>
          <span class="text-sm"><a href="#" class="text-primary">Forgot your password?</a></span>
        </div>
      </div>
      <div class="w-full px-2">
        <button 
          text="Sign in"
          variant="primary"
          class="w-full"
          :fn="handleLogin"
        />
      </div>
      <button
        text="Sign in"
        class="bg-black-400 w-full"
      >
      </button>
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
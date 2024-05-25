<template>
  <button @click="handleLogout">Logout</button>
</template>

<script>
import { logout } from '../services/authService'

export default {
  methods: {
    async handleLogout() {
      try {
        await logout();
        this.$router.push('/login')
      } catch (error) {
        console.error('Error logging out:', error);
      }
    }
  }
}

</script>

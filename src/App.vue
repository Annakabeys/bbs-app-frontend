<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LoginPage from './pages/LoginPage.vue'
import Registration from './pages/RegistrationPage.vue'
import Home from './pages/HomePage.vue'
import { useRouter } from '@/composables/useRouter'

const store = useRouter()
</script>

<template>
  <LoginPage v-if="store.status === false" />
  <Registration v-else-if="store.status === true" />
  <Home v-else/>
</template>

<template>
  <BbsApp>
    <template #header>
    </template>

    <template #posts>
      Welcome to BbsApp
      <h1>Hi</h1>
      <bbs-button button-type="submit" button-name="login-user" @click="route.status = 'notLoggedIn'">
        Log in
      </bbs-button>
    </template>

    <template #footer></template>
  </BbsApp>
</template>

<script setup lang="ts">
import BbsApp from '../components/templates/BbsApp.vue'
import BbsButton from '../components/atoms/bbs-button.vue'
import { useRouter } from '../composables/useRouter'

const route = useRouter()
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>

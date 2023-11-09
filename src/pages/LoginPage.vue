<template >
  <BbsForms>
    <template #header>
      <h1>Login</h1>
    </template>

    <template #form>
      <LoginForm />
    </template>

    <template #footer></template>
  </BbsForms>
</template>

<script setup lang="ts">
import BbsForms from '../components/templates/BbsForms.vue'
import LoginForm from '../components/organisms/bbs-login-form.vue'
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
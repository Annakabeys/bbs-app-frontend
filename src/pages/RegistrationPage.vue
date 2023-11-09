<template >
  <BbsForms>
    <template #header>
      <h1>Registration</h1>
    </template>

    <template #form>
      <RegistrationForm />
    </template>

    <template #footer></template>
  </BbsForms>
</template>

<script setup lang="ts">
import BbsForms from '../components/templates/BbsForms.vue'
import RegistrationForm from '../components/organisms/bbs-registration-form.vue'
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
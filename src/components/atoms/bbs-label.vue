<template>
  <label :for="labelName" class="bbs-label">
    <slot />
  </label>
</template>

<script setup lang="ts">
defineProps(['labelName'])
</script>

<style scoped>
.bbs-label {
  padding: 12px 12px 12px 0;
  display: flex;
  align-items: center;
}
</style>
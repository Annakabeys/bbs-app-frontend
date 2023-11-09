<template>
  <bbs-label label-name="first-name"> First Name </bbs-label>
  <bbs-input
    input-type="text"
    input-name="first-name"
    :value="modelValue"
    required
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup lang="ts">
import BbsLabel from '../atoms/bbs-label.vue'
import BbsInput from '../atoms/bbs-input.vue'

defineProps(['modelValue'])

defineEmits(['update:modelValue'])
</script>
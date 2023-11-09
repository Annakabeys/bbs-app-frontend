<template>
  <bbs-label label-name="middle-name"> Middle Name </bbs-label>
  <bbs-input
    input-type="text"
    input-name="middle-name"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup lang="ts">
import BbsLabel from '../atoms/bbs-label.vue'
import BbsInput from '../atoms/bbs-input.vue'

defineProps(['modelValue'])

defineEmits(['update:modelValue'])
</script>
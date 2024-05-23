<template>
  <ui-input
      class="search-input"
      v-bind="$props"
      @update:model-value="$emit('update:model-value', $event)"
      @keyup="$emit('keyup', $event)"
  />
</template>

<script setup>
  defineEmits(['update:model-value', 'keyup'])

defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  debounceTimeoutTime: {
    type: Number,
    required: false,
    default: null
  }
})
</script>

<style lang="scss" src="./styles.scss" />
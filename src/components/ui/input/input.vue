<template>
  <label
    :class="{
      'ui-input--with-label': label,
      'ui-input--has-value': modelValue,
    }"
    class="ui-input"
  >
    <input
      :value="modelValue"
      class="ui-input__field"
      @input="onInput($event.target.value)"
      @keyup="onKeyup($event.target.value)"
    />
    <span class="ui-input__label">
      {{ label }}
    </span>
  </label>
</template>

<script lang="ts" setup>
const props = defineProps({
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

const debounceTimeout = ref(null)

const emit = defineEmits(['keyup', 'update:model-value', 'debounced-update'])
const onInput = (value) => {
  emit('update:model-value', value)
}
const onKeyup = (value: string) => {
  emit('keyup', value)

  if (props.debounceTimeoutTime) {
    clearTimeout(debounceTimeout.value)
    debounceTimeout.value = setTimeout(() => {
      emit('debounced-update', value)
    }, props.debounceTimeoutTime)
  }
}
</script>

<style lang="scss" src="./styles.scss"/>

<template>
  <select
      class="ui-select"
      :value="modelValue"
  >
    <option value="">
      {{ placeholder }}
    </option>
    <option v-for="option in options" :key="option" :value="option" @click="onChange(option)">
      {{ option }}
    </option>
  </select>
</template>

<script lang="ts" setup>
interface Props {
  modelValue: string | number
  options: (string | number)[]
  placeholder?: string
}

withDefaults(defineProps<Props>(), {
  placeholder: 'Выберите значение',
  options: () => []
})

const emit = defineEmits(['update:model-value'])
const onChange = (value) => {
  emit('update:model-value', value)
}
</script>

<style lang="scss" src="./styles.scss" />

<template>
  <Field
    :value="modelValue"
    @input="updateInput"
    type="text"
    class="w-full px-2 py-3 border-1 border-black focus:outline-none"
  />
</template>
<script>
import { Field } from 'vee-validate';
export default {
  name: 'app-input',
  components: {
    Field,
  },
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(e) {
      this.$emit('update:modelValue', e.target.value);
    },
  },
};
</script>
<style scoped></style>

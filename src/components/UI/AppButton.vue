<template>
  <button
    class="rounded-sm bg-blue-400 px-2 py-2 self-center disabled:bg-gray-300"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'app-button',
};
</script>
<style scoped>
.btn {
  padding: 8px 16px;
  background: none;
  color: teal;
  border: 1px solid teal;
}
</style>

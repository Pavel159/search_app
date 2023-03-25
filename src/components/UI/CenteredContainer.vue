<template>
  <div
    class="absolute w-[500px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col gap-3 bg-blue-300 px-10 py-10 rounded-sm"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'centered-container',
};
</script>
<style></style>

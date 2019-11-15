<template>
  <div class="cell" :class="classes" @click="onCellClick">
    {{ value }}
  </div>
</template>

<script src="./index.js"></script>
<style scoped lang="scss" src="./style.scss"></style>
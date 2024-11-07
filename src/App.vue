<script setup>
import Option from "./components/Option.vue"


</script>

<template>
  <header class="app__header">

  </header>
  <main class="app__main">
    <Option />
  </main>
</template>

<style scoped lang="scss">
.app {
  &__header {
    height: 3.5rem;
    background: var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__main {
    padding: 1rem;
  }
}
</style>

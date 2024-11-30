<script setup>
import Option from "./components/TOption.vue"


</script>

<template>
  <header class="app__header">

  </header>
  <main class="app__main">
    <RouterView />
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
  &-option {
    margin-bottom: 1rem;
  }
}
</style>

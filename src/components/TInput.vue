<script setup>
import { defineModel } from "vue"

const model = defineModel();

</script>

<template>
    <div class="t-input">
        <input v-model="model" class="t-input__field" />
    </div>
</template>

<style scoped lang="scss">
.t-input {
    &__field {

    }
}
</style>

<script setup>
import CheckBox from "./CheckBox.vue"
import { defineProps, defineModel } from "vue"

const {
    option
} = defineProps()

const model = defineModel()

</script>

<template>
    <div class="option">
        <CheckBox v-model="model"/>
        <p>{{ option }}</p>
    </div>
</template>

<style scoped lang="scss">
.option {
    border: solid 1px var(--primary);
    border-radius: .5rem;
    padding: 1rem;
}
</style>

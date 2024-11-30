<script setup>
import { defineModel, computed } from "vue"
import TSing from "./TSing.vue"

const {
    name
} = defineProps()
const model = defineModel()

const sing = computed(() => {
    return name
})

</script>

<template>
    <label class="checkbox">
        <Sing name="check" />
        <slot />
    </label>
</template>

<style scoped lang="scss">
.checkbox {
    display: flex;
    align-items: center;
    &__check {
        border-radius: .2rem;
        width: 2rem;
        height: 2rem;
        border: solid .1rem var(--primary);
        margin-right: .5rem;
    }
}
</style>

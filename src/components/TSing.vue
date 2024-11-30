<script setup>
import { computed, reactive } from "vue"

// list of sing data
const sings = reactive({
    "check": [
        {
            "d": "M8.42995 13.445L18.36 3.51499C19.14 2.73499 20.4 2.73499 21.19 3.51499L22.59 4.91499C23.37 5.69499 23.37 6.96499 22.59 7.74499L9.83995 20.485C9.05995 21.265 7.78995 21.265 7.00995 20.485L1.40995 14.885C0.629951 14.105 0.629951 12.835 1.40995 12.055L2.80995 10.655C3.58995 9.87499 4.85995 9.87499 5.63995 10.655L8.42995 13.445ZM20.4699 7.03499C20.86 6.64499 20.86 6.02499 20.4699 5.63499C20.08 5.24499 19.46 5.24499 19.07 5.63499L8.42995 16.275L4.92995 12.775C4.53995 12.385 3.91995 12.385 3.52995 12.775C3.3428 12.9598 3.23747 13.2119 3.23747 13.475C3.23747 13.738 3.3428 13.9901 3.52995 14.175L7.72995 18.375C8.11995 18.765 8.73995 18.765 9.12995 18.375L20.4699 7.03499Z",
            "fill": "#333333"
        }
    ]
})

const {
    name
} = defineProps()

const sing = computed(() => {
    return sings[name]
})

// check is multi data sing
const isArray = computed(() => {
    return Array.isArray(sing.value)
})

</script>

<template>
    <div class="sing">
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                v-if="isArray"
                v-for="singAttrs in sing"
                v-bind="singAttrs"
                fill-rule="evenodd"
                clip-rule="evenodd"
            />
            <path
                v-else
                v-bind="sing"
                fill-rule="evenodd"
                clip-rule="evenodd"
            />

        </svg>
    </div>
</template>

<style scoped lang="scss">
.sing {

}
</style>

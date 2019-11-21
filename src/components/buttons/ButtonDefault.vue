<template>
    <button class="button-default" :class="[color, disabled]" :disabled="disabled">
        {{ textButton }}
    </button>
</template>
<script>
export default {
    props: {
        textButton: {
            type: String,
            required: true
        },
        disabled: {
            type: Boolean,
            default: false
        },
        selected: {
            type: Boolean,
            default: false
        },
        color: {
            type: String
        }
    },
    computed: {
        
    }
}
</script>
<style lang="scss">
    .button-default{
        height: 45px;
        border-radius: 20px;
        border: 1px solid transparent;
        background-color: white;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 10px;
        outline: none;
        cursor: pointer;
        padding: 0 50px;
    }

    .disabled{
       cursor: not-allowed;
    }

    .yellow{
        background-color: #FFF581;
        color: black;
        border: none;
    }

    .blue{
        background-color: #21445a;
        color: #4c6a7b;
    }
</style>
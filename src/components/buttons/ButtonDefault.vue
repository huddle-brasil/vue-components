<template>
    <button class="button-default" :class="[color]" :disabled="disabled">
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
    }
}
</script>
<style lang="scss">
    .button-default{
        height: 35px;
        border-radius: 20px;
        border: 1px solid black;
        background-color: white;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 10px;
        outline: none;
        cursor: pointer;
        padding: 10px 30px;
    }

    .disabled{
       border: 1px solid #cacccd;
       color: #cacccd;
       cursor: not-allowed;
    }

    .selected{
        background-color: #FFF581;
        border: none;
    }

    .yellow{
        background-color: #FFF581;
        border: none;
    }
</style>
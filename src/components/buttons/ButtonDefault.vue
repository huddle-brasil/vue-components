<template>
    <button class="button-default" :class="{ disabled }" :disabled="disabled">
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
        }
    }
}
</script>
<style lang="scss">
    .button-default{
        width: 150px;
        height: 30px;
        border-radius: 20px;
        border: 1px solid black;
        background-color: white;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 10px;
        outline: none;
        cursor: pointer;
    }

    .disabled{
       border: 1px solid #cacccd;
       color: #cacccd;
       cursor: not-allowed;
    }
</style>
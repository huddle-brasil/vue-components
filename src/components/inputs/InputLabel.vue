<template>
    <div class="input-label">
        <label :for="`input=${game}`">{{ label }}</label>
        <input :id="`input=${game}`" type="number" value="0">
    </div>
</template>
<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        },
        game: {
            type: String,
            required: true
        }
    }
}
</script>
<style lang="scss">
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance:textfield;
    }

    .input-label{
        padding: 20px;
        border: 1px solid #ffffff27;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        label{
            color: #ffffff91;
            text-transform: uppercase;
            font-size: 15px;
            letter-spacing: 1px;
            width: 80%;
        }

        input{
            border: none;
            background-color: transparent;
            outline: none;
            color: #ffffff;
            font-size: 15px;
            width: 20%;
            text-align: right;
        }
    }
</style>
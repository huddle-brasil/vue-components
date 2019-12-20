<template>
    <div class="alert-success">
        <span class="alert-text">{{ alertText }}</span>  
    </div>    
</template>
<script>
export default {
    props: {
        alertText: {
            type : String,
            required : true
        }
    }
}
</script>
<style lang="scss" scoped>
    .alert-success{
        background-color: #264961;
        padding: 20px 50px;
        border-radius: 50px;

        .alert-text{
            color: #75fdf5;
            font-weight: bold;
            text-transform: uppercase;
            font-size: 22px;
            letter-spacing: 2px;
        }
    }
</style>

<template>
    <div class="close" @click="closeAction()">
        <img class="close-img" src="../../../public/close.png" alt="">  
    </div>    
</template>
<script>
export default {
    methods: {
        closeAction(){
            this.$emit('closeAction')
        }
    }
}
</script>
<style lang="scss" scoped>
    .close{
        border: 1px solid white;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        .close-img{
            width: 15px;
        }
    }
</style>

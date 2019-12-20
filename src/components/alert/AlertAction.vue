<template>
    <div class="alert-action">
        <div class="alert-action-container">
            <div class="title-alert-action">
                <title-subtitle 
                    :title="header.title"
                    :subtitle="header.subtitle"></title-subtitle>
            </div>
            <div class="message-alert-action">
                <alert-success
                    :alertText="alertText"></alert-success>
            </div>
            <div class="button-alert-action">
                <button-default 
                    v-for="(button, index) in buttons"
                    :textButton="button.text" 
                    :color="button.color"
                    :key="index"></button-default>
            </div>
        </div>
    </div>
</template>
<script>
import TitleSubtitle from '../title/TitleSubtitle.vue'
import AlertSuccess from '../alert/AlertSuccess.vue'
import ButtonDefault from '../buttons/ButtonDefault.vue'
export default {
    components: {
        TitleSubtitle,
        AlertSuccess,
        ButtonDefault
    },
    props: {
        header : {
            type : Object,
            required : true
        },
        alertText : {
            type : String,
            required : true
        },
        buttons: {
            type : Array,
            required : true
        }
    }
}
</script>
<style lang="scss" scoped>
    .alert-action{
        background-color: #265772;
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .alert-action-container{
            height: 35%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;

            .button-alert-action{
                width: 90%;
                display: flex;
                justify-content: space-around;
            }
        }
    }
</style>

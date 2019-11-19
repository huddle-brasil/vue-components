<template>
    <div class="flow-wrapper">
        <div class="slot">
            <slot></slot>
        </div>
        <div class="info-bottom">
            <div class="info" v-if="infoText">
                <img src="../../../public/info.png" alt="" class="info-img">
                <span class="info-text">{{ infoText }}</span>
            </div>
            <div class="info-buttons">
                <button-default 
                    :disabled="buttonEnabled" 
                    :textButton="textButton" 
                    :color="buttonEnabled ? 'yellow' : 'blue'"></button-default>
            </div>
        </div>
    </div>
</template>
<script>
import ButtonDefault from '../buttons/ButtonDefault'
import { Bus } from '@/event-bus.js'
export default { 
    data(){
        return{
            buttonEnabled : false
        }
    },
    created(){
        Bus.$on('enableButton', this.enableButton)
    },
    destroyed(){
        Bus.$off('enableButton')
    },
    components : {
        ButtonDefault
    },
    props:{
        infoText: {
            type: String
        },
        textButton: {
            type: String
        }
    },
    methods: {
        enableButton(enableData){
            console.log(enableData)
            this.buttonEnabled = this.enableData.enable ? true : false
            this.$parent.$emit('flowWrapperAction', enableData.actionData)
            console.log(enableData)
        }
    }
}
</script>
<style lang="scss" scoped>
    .flow-wrapper{
        width: 42%;

        .slot{

        }

        .info-bottom{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100px;

            .info{
                width: 60%;
                display: flex;
                align-items: center;

                .info-img{
                    height: 20px;
                    margin-right: 10px
                }

                .info-text{
                    font-size: 10px;
                    color: rgb(204, 204, 204);
                    line-height: 15px;
                    width: 80%;
                }
            }
            .info-buttons{
                width: 40%;
                display: flex;
                justify-content: flex-end;
            }
        }
    }
</style>
<template>
    <div class="flow-wrapper">
        <div class="flow-history-container">
            <flow-history :historical="historical"></flow-history>
        </div>
        <div class="flow-input-container" :style="{ width : `${width}`}">
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
        <div class="close-container">
            <close></close>
        </div>
    </div>
</template>
<script>
import ButtonDefault from '../buttons/ButtonDefault'
import FlowHistory from '../shared/FlowHistory'
import Close from '../shared/Close'
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
        ButtonDefault,
        FlowHistory,
        Close
    },
    props:{
        infoText: {
            type: String
        },
        textButton: {
            type: String
        },
        width: {
            type: String
        },
        historical: {
            type: Array
        }
    },
    methods: {
        enableButton(enableData){
            this.buttonEnabled = enableData.enable ? true : false
            this.$parent.$emit('flowWrapperAction', enableData.actionData)
        }
    }
}
</script>
<style lang="scss" scoped>
    .flow-wrapper{
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        .flow-history-container{
            position: absolute;
            top: 30px;
            left: 30px;
        }

        .close-container{
            position: absolute;
            top: 20px;
            right: 30px;
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
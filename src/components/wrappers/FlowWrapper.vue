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
                <button-default :textButton="textButton" color="yellow"></button-default>
            </div>
        </div>
    </div>
</template>
<script>
import ButtonDefault from '../buttons/ButtonDefault'
export default { 
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

            .info{
                width: 60%;
                display: flex;
                align-items: center;

                .info-img{
                    height: 30px;
                    margin-right: 10px
                }

                .info-text{
                    font-size: 12px;
                    color: rgb(226, 226, 226);
                }
            }
            .info-buttons{
                width: 40%;
            }
        }
    }
</style>
<template>
    <div class="flow-games">
        <flow-wrapper
            infoText="Temos o mínimo de 100 senhas contratadas para algum dos games."
            textButton="Prosseguir"
            width="50%"
            :historical="historical">
            <div>
                <input-label game="repense" label="Numero de senhas"></input-label>
                <input-label game="decode" label="Numero de senhas"></input-label>
            </div>
        </flow-wrapper>
    </div>
</template>
<script>
import FlowWrapper from '../components/wrappers/FlowWrapper'
import InputLabel from '../components/inputs/InputLabel'
export default {
    components: {
        FlowWrapper,
        InputLabel,
    },
    data(){
        return{
            historical: [
                { title: 'Empresa', item: 'National Football' },
                { title: 'Processo', item: 'Trainee of Making Money 2020' }
            ]
        }
    }
}
</script>
<style lang="scss">
   .flow-games{
        background-color: #265772;
   } 
</style>
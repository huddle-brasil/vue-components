<template>
    <div class="flow">
        <flow-wrapper
            infoText="Para cadastrar um nova empresa basta digitar o nome
            dela ao invés de selecioná-la. Ela já estará presente
            na listas nos próximos orçamentos."
            textButton="Prosseguir"
            width="50%"
            :historical="historical">
            <input-default
                placeholder="Digite ou selecione o nome da empresa"
                :list="list"
                :filterable="true"></input-default>
        </flow-wrapper>
    </div>
</template>
<script>
import InputDefault from '../components/inputs/InputDefault'
import FlowWrapper from '../components/wrappers/FlowWrapper'

export default {
    components: {
        InputDefault,
        FlowWrapper
    },
    data(){
        return{
            list : [
                { id: 'palmeiras', label: 'Palmeiras' },
                { id: 'fluminense', label: 'Fluminense' },
                { id: 'flamengo', label: 'Flamengo' },
                { id: 'santos', label: 'Santos' },
                { id: 'csa', label: 'CSA' },
                { id: 'fortaleza', label: 'Fortaleza' },
                { id: 'sao paulo', label: 'São Paulo' },
                { id: 'botafogo', label: 'Botafogo' },
                { id: 'chapecoense', label: 'Chapecoense' },
                { id: 'corinthians', label : 'Corinthians' }
            ],
            historical: [
                { title: 'Empresa', item: 'National Football' },
                { title: 'Processo', item: 'Trainee of Making Money 2020' }
            ]
        }
    }
}
</script>
<style lang="scss">
    .flow{
        background-color: #265772;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>

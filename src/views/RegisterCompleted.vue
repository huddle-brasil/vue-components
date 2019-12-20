<template>
    <div class="register-completed">
        <alert-action 
            :header="header"
            :alertText="alertText"
            :buttons="buttons"></alert-action>
    </div>
</template>
<script>
import AlertAction from '../components/alert/AlertAction.vue'
export default {
    components: {
        AlertAction
    },
    data(){
        return{
            header: {
                title : 'National Football League',
                subtitle : 'Trainee of Making Money 2020'
            },
            alertText : 'Cadastrada com sucesso!',
            buttons : [
                { text: 'imprimir' },
                { text: 'finalizar', color: 'yellow'}
            ]
        }
    }
}
</script>
<style lang="scss" scoped>

</style>

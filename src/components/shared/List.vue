<template>
    <ul class="list" >
        <li v-for="(item, index) in list" 
            :key="index" 
            class="list-item" 
            @click="actionListItem(item)">
            {{ item.label }}
        </li>       
    </ul>
</template>
<script>
export default {
    props: {
        list : {
            type: Array,
            required: true
        }
    },
    methods: {
        actionListItem(item){
            this.$emit('actionListItem', item)
        }
    }
}
</script>
<style lang="scss" scoped>
    .list{
        border-radius: 20px;
        max-height: 300px;
        overflow-x: overlay;
        border: none;

        .list-item{
            padding: 20px;
            font-size: 18px;
            font-weight: bold;
            cursor: pointer;
            

            &:nth-child(even){
                background-color: #f7f7f7
            }

            &:nth-child(odd){
                background-color: #ededed;
            }

            &:hover{
                background-color: #242a2d;
                color: white;
            }
        }
    }
</style>

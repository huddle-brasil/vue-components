<template>
    <div class="filtarable-input">
        <div class="wrapper-input">
            <input 
                @focus="toggleList(true)" 
                type="text" 
                class="input" 
                :placeholder="placeholder" 
                v-model="argument"
                @input="enableButton">
            <div v-if="filterable" class="arrow-down" @click="arrowToggle()"></div>
        </div>
        <div class="filtarable-list" v-if="showList && filterable">
            <list 
                :list="filteredList"
                @actionListItem="actionListItem($event)"></list>
        </div>
    </div>
</template>
<script>
import List from '../shared/List'
import { alphabeticalOrder, filterArrayByArgument } from '../../helpers/filters.js'
import { Bus } from '@/event-bus.js'
export default {
    components: {
        List
    },
    data(){
        return{
            argument: '',
            internalShowList: false
        }
    },
    props: {
        placeholder:{
            type : String,
            required: true
        },
        list:{
            type: Array,
            required: true
        },
        externalShowList:{
            type: Boolean,
            default: false
        },
        filterable:{
            type: Boolean,
            default: false
        }
    },
    computed: {
        showList(){
            if(!this.filterable) return false 
            return this.internalShowList || this.externalShowList ? true : false
        },
        filteredList(){
            return alphabeticalOrder(filterArrayByArgument(this.list, this.argument, 'label'), 'label')
        }
    },
    methods: {
        arrowToggle(){
            this.argument = ''
            this.toggleList()
        },
        toggleList(boolean){
            this.internalShowList = boolean ? boolean : !this.internalShowList
        },
        actionListItem(selectedItem){
            this.argument = selectedItem.label
            this.toggleList(false)
            this.enableButton()
        },
        enableButton(){
            const enable = this.argument ? true : false
            Bus.$emit('enableButton', { enable, actionData : this.argument })
        }
    }
}
</script>
<style lang="scss" scoped>
    .filtarable-input{
        position: relative;
        .wrapper-input{
            position: relative;

            .input{
                background-color: transparent;
                border: none;
                border-bottom: 1px solid white;
                outline: none;
                color: white;
                width: 600px;
                height: 50px;
                font-size: 16px;
                letter-spacing: 2px;

                &::placeholder{
                    color: white;
                    font-size: 16px;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                }   
            }
            .arrow-down{
                width: 0;
                height: 0;
                border-left: 10px solid transparent;
                border-right: 10px solid transparent;
                border-top: 10px solid #ffffff;
                font-size: 0;
                line-height: 0;
                position: absolute;
                right: 10px;
                top: 25px;
                cursor: pointer;
            }
        }
        .filtarable-list{
            position: absolute;
            top: 130%;
            width: 100%;
        }
    }
</style>

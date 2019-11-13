<template>
    <table class="table-default">
        <thead class="table-header">
            <th class="table-header-item"
                v-for="(key, index) in tableKeys" :key="index"
                :style="{backgroundColor : key.background}"
                @click="openFilterInput(key, index)"
                :ref="`th${index}`">
                <img class="search-icon" src="../../../public/lupinha.png" alt="">
                <span 
                    v-if="!key.filter"
                    v-show="!selectedFilter || selectedFilter != key.name" 
                    :class="`${key.name}-item`"
                    :ref="`${key.name}Item`">{{key.label}}</span>
                <input 
                    v-else
                    :class="`${key.name}-input`"
                    :ref="`${key.name}Input`" 
                    type="text" 
                    :placeholder="key.label" 
                    @input="($event) => filterArguments = $event.target.value"
                    @blur="focusOutInput(index)">
            </th>
        </thead>
        <tbody class="table-body">
            <tr class="table-row" 
                v-for="(row, index) in filteredTableData"
                :key="index"
                :ref="`tableRow${index}`"
                @click="rowSelectionToggle(index, row)">
                <td class="table-row-item" v-for="(item, key, indexTd) in row" :key="item">
                    <label v-if="select && indexTd === 0">
                        <input @click="checkedToggle(index)" :ref="`check${index}`" type="checkbox">
                    </label>
                    <span class="row-item-text">{{ item }}</span>
                    <div class="row-actions" v-if="rowActions && indexTd === 0">
                        <div class="row-action" 
                             v-for="(rowAction, rowActionIndex) in rowActions"
                             :key="rowActionIndex"
                             @click="rowActionEmitted(rowAction.action, row, index)">
                            <div class="tooltip">
                                {{ rowAction.label }}
                            </div>
                            <img :src="rowAction.image" alt="">
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script>
export default {
    data(){
        return{
            selectedFilter : '',
            filterArguments : ''
        }
    },
    props: {
        tableData: {
            type: Array,
            required: true
        },
        tableKeys: {
            type: Array,
            required: true
        },
        select: {
            type: Boolean,
            default: false
        },
        primaryKey: {
            type: String,
            required: true
        },
        rowActions: {
            type: Array
        }
    },
    methods: {
        openFilterInput(key, index){
            if(!key.filter) return
            this.selectedFilter = key.name 
            const [ thead ] = this.$refs[`th${index}`]
            const [ input ] = this.$refs[`${key.name}Input`]
            thead.style.backgroundColor = ''
            thead.classList.add('selectedTh')
            setTimeout(() => {
                input.focus()
            }, 300);
        },
        rowSelectionToggle(index, rowData){
            if(!this.select) return
            const [ row ] = this.$refs[`tableRow${index}`]
            let classOperation = 'remove'
            let emittedAction = 'unselectedRow'
            if(!row.classList.contains('selected-row')) {
                classOperation = 'add'
                emittedAction = 'selectedRow'
            }
            row.classList[classOperation]('selected-row') 
            this.checkedToggle(index)
            this.$emit(emittedAction, rowData)
        },
        checkedToggle(index){
            const [ check ] = this.$refs[`check${index}`]
            check.checked = !check.checked
        },
        focusOutInput(index){
            const [ thead ] = this.$refs[`th${index}`]
            thead.classList.remove('selectedTh')
        },
        rowActionEmitted(rowAction, row){
            this.$emit(rowAction, row)
        }
    },
    computed: {
        filteredTableData(){
            if(!this.selectedFilter) return this.tableData

            const filteredTableData = this.tableData.filter(row => {
                const selectedFilter = row[this.selectedFilter].toLowerCase()
                const filterArguments = this.filterArguments.toLowerCase()
                return selectedFilter.startsWith(filterArguments)
            })

            return filteredTableData
        }, 
        // filterableColumns(){
        //     const filterableKeys = this.tableKeys.filter(key => {
        //         return key.filter
        //     })

        //     let filterableColumns = []

        //     filterableKeys.forEach(key => {
        //         let keyObject = { key : key.name, data : [] }
        //         this.tableData.forEach(data => {
        //             keyObject.data.push(data[key.name])
        //         })
        //         filterableColumns.push(keyObject)
        //     })

        //     return filterableColumns
        // }
    }
}
</script>
<style lang="scss" scoped>

    .table-default{
        width: 70%;
        margin: 5% auto;
        table-layout: fixed;
        border-collapse: separate;
        border-spacing: 3px 0;

        .table-header{
            

            .table-header-item{
                color: white;
                font-weight: bold;
                text-transform: uppercase;
                height: 35px;
                vertical-align: middle;
                font-size: 11px;
                border-top-right-radius: 5px;
                border-top-left-radius: 5px;
                letter-spacing: 2px;
                background-color: #6c7b84;
                position: relative;

                &:first-child{
                    text-align: left;
                    padding-left: 50px;

                    input{
                        &::placeholder{
                            text-align: left;
                        }
                    }
                }

                .search-icon{
                    height: 20px;
                    position: absolute;
                    left: 10px;
                    top: 7px;
                }

                input{
                    background: transparent;
                    border: none;
                    color: white;
                    height: 100%;
                    font-weight: bold;
                    outline: none;

                    &::placeholder{
                        color: white;
                        font-weight: bold;
                        text-transform: uppercase;
                        font-size: 11px;
                        letter-spacing: 2px;
                        width: 100%;
                        text-align: center;
                    }
                }
            }

            .selectedTh{
                background-color: black;
            }
        }

        .table-body{

            .table-row{

                height: 45px;
                cursor: pointer;

                &:nth-child(even){
                    background-color: #f7f7f7
                }

                &:nth-child(odd){
                    background-color: #ededed;
                }

                &:hover{
                    background-color: #743470;

                    .table-row-item{
                        color: white;
                        font-weight: bold;

                        input[type=checkbox]{
                            background-color: #522652;
                        }
                    }
                }
                
                .table-row-item{

                    text-align: center;
                    vertical-align: middle;
                    color: #2e2e2e;
                    font-size: 14px;
                    position: relative;

                    &:first-child{
                        text-align: left;
                    }

                    input[type=checkbox] {
                        -webkit-appearance: none;
                        -moz-appearance: none;
                        appearance: none;
                        outline: none;
                        cursor: pointer;
                    }

                    input[type=checkbox] {
                        position: relative;
                        width: 20px;
                        height: 20px;
                        background-color: #dbdbdb;
                        font-weight: bold;
                        font-size: 10px;
                        text-transform: uppercase;
                        vertical-align: middle;
                        color: #2e353a;
                        margin: 0 15px;
                    }

                    input[type=checkbox]::before {
                        content: url('../../../public/checked.png');
                        transform: scale(.75);
                        position: absolute;
                        font-size: 13px;
                        height: 20px;
                        right: 2px;
                        top: 2px;
                        visibility: hidden;
                    }

                    input[type=checkbox]:checked::before {
                        visibility: visible;
                    }

                    input[type=checkbox]:disabled {
                        border-color: black;
                        background: #ddd;
                        color: gray;
                    }
                    
                    .row-actions{
                        position: absolute;
                        top: 0;
                        right: 10px;
                        height: 45px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        

                        .row-action{
                            margin: 0 5px;
                            visibility: hidden;
                            position: relative;

                            &:hover .tooltip{
                                visibility: visible;
                            }

                            .tooltip{
                                position: absolute;
                                top: -45px;
                                right: -60px;
                                color: #F7E178;
                                background-color: #421b43;
                                width: 100px;
                                height: 40px;
                                text-align: center;
                                display: flex;
                                align-items: center;
                                border-radius: 20px;
                                padding: 0 13px;
                                font-weight: bold;
                                font-size: 12px;
                                justify-content: center;
                                visibility: hidden;
                            }

                            img{
                                height: 25px;
                            }
                        }
                    }

                    &:hover .row-action{
                        visibility: visible;
                    }
                }
            }

            .selected-row{
                background-color: #242a2d !important;

                &:hover{
                    background-color: #743470;

                    .table-row-item{
                        color: white;
                        font-weight: bold;

                        input[type=checkbox]{
                            background-color: #522652;
                        }
                    }
                }

                .table-row-item{
                    color: white;
                    font-weight: bold;
                }

                input[type=checkbox]{
                    background-color: #ffffff !important;
                }
            }
            
        }
    }
</style>
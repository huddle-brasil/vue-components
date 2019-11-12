<template>
    <table class="table-default">
        <thead class="table-header">
            <th class="table-header-item"
                v-for="(key, index) in tableKeys" :key="index"
                :style="{backgroundColor : key.background}"
                @click="openFilterInput(key)">
                <span :class="`${key.name}-item`">{{key.label}}</span>
                <input :class="`${key.name}-input`" class="hide" type="text" :placeholder="key.label" v-model="filterArguments">
            </th>
        </thead>
        <tbody class="table-body">
            <tr class="table-row" 
                v-for="(row, index) in filteredTableData"
                :key="index">
                <td class="table-row-item" v-for="(item) in row" :key="item">
                    {{ item }}
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
        }
    },
    methods: {
        openFilterInput(key){
            if(!key.filter) return
            this.selectedFilter = key.name 
            const theadItem = document.querySelector(`.${key.name}-item`)
            const theadInput = document.querySelector(`.${key.name}-input`)
            theadItem.classList.add('hide')
            theadInput.classList.add('show')
            theadInput.classList.remove('hide')
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
        filterableColumns(){
            const filterableKeys = this.tableKeys.filter(key => {
                return key.filter
            })

            let filterableColumns = []

            filterableKeys.forEach(key => {
                let keyObject = { key : key.name, data : [] }
                this.tableData.forEach(data => {
                    keyObject.data.push(data[key.name])
                })
                filterableColumns.push(keyObject)
            })

            return filterableColumns
        }
    }
}
</script>
<style lang="scss" scoped>
    .hide{
        display: none;
    }
    .show{
        display: block;
    }
</style>


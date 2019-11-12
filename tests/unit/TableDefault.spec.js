import TableDefault from "@/components/TableDefault"
import { shallowMount } from '@vue/test-utils'


describe('TableDefault', () => {

    it('Caso alguma coluna tenha filtro, será criado um array com todos as linhas da sua coluna', () => {

        const tableData = [ { name : 'Vitor', age : 22 }, { name : 'Caroline', age : 20 } ]
        const tableKeys = [ { name : 'name', label : 'Nome', filter : true }, { name : 'age', label : 'Idade', filter : false }  ]
        const filterableColumns = [ { key : 'name', data : [ 'Vitor', 'Caroline' ] } ]
        
        const wrapper = shallowMount(TableDefault, {
            propsData : {
                tableData,
                tableKeys,
                primaryKey : 'name'
            }
        })

        expect(wrapper.vm.filterableColumns).toEqual(filterableColumns)
    })

    it('Caso haja algo digitado no campo de filtro as linhas das tabelas devem corresponder a lista filtrada a partir dos caracteres digitados', () => {

        const tableData = [ { name : 'Vitor', age : 22 }, { name : 'Caroline', age : 20 } ]
        const tableKeys = [ { name : 'name', label : 'Nome', filter : true }, { name : 'age', label : 'Idade', filter : false }  ]
        const selectedFilter = 'name'
        const expectedData = [ { name : 'Vitor', age : 22 } ]
        const filterArguments = 'Vi'

        const wrapper = shallowMount(TableDefault, {
            propsData : {
                tableData,
                tableKeys,
                primaryKey : 'name'
            }
        })
        wrapper.setData({ selectedFilter })
        wrapper.setData({ filterArguments })
        expect(wrapper.vm.filteredTableData).toEqual(expectedData)
    })

    // it('Ao clicar em um thead com filtro, abrir um input e fechar o thead e selecionar o selectedFilter.', () => {

    //     const tableData = [ { name : 'Vitor', age : 22 }, { name : 'Caroline', age : 20 } ]
    //     const tableKeys = [ { name : 'name', label : 'Nome', filter : true }, { name : 'age', label : 'Idade', filter : false }  ]

    //     const wrapper = shallowMount(TableDefault, {
    //         propsData : {
    //             tableData,
    //             tableKeys,
    //             primaryKey : 'name'
    //         }
    //     })

    //     wrapper.find('.name-item').trigger('click')
    //     wrapper.setData( { selectedFilter : 'name' } )
    //     expect(wrapper.find('.name-item').isVisible()).toEqual(false)
    //     expect(wrapper.find('.name-input').isVisible()).toEqual(true)
    //     expect(wrapper.vm.selectedFilter).toEqual('name')
    // })
})
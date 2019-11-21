<template>
    <div class="dashboard">
        <header-default
			:mainLogo="mainLogo"
			:secondaryLogo="secondaryLogo"
			logoutAction="logout"></header-default>
		<Sidebar 
			v-for="sidebar of sidebars" 
			:key="sidebar.title"
			:title="sidebar.title" 
			:navItems="sidebar.navItems" 
			:isCollapsable="sidebar.isCollapsable"
			></Sidebar>
		<div class="table-wrapper">
			<div class="button-container">
				<button-default 
					textButton="extrair pdf's selecionados"
					:selected="true"></button-default>
				<button-default textButton="gerar pdf"></button-default>
				<button-default textButton="extrair csv"></button-default>
			</div>
			<div class="table-container">
				<table-default 
					:tableData="tableData" 
					:tableKeys="tableKeys"
					:select="true"
					primaryKey="name"
					:rowActions="rowActions"
					@unselectedRow="(data) => teste(data)"
					@selectedRow="(data) => teste(data)"></table-default>
			</div>
		</div>
    </div>
    
</template>
<script>
import Sidebar from '../components/sidebar/DefaultSidebar'
import TableDefault from '../components/tables/TableDefault'
import ButtonDefault from '../components/buttons/ButtonDefault'
import HeaderDefault from '../components/headers/HeaderDefault'

export default {
    components: {
		TableDefault,
		Sidebar,
		ButtonDefault,
		HeaderDefault
    },
    data:()=>({
		sidebars:[
			{
				title: 'Empresa',
				navItems: ["Barcelona F.C", "S.E Palmeiras", "Philadelfia Eagles"],
				navItemsListType: 'dot',
			},
			{
				title: 'Workspace',
				navItems: ["Programa de estágio USIMINAS 2020", "Programa de trainee Líder aviação 2020"],
				navItemsListType: 'arrow',
				isCollapsable: true
			}
		],
		tableData : [ 
			{ name : 'Vitor', lastName : 'Vicente', age : 22 }, 
			{ name : 'Caroline', lastName : 'Andrade', age : 20 },
			{ name : 'Gabi', lastName : 'Gabs', age : 22 }, 
			{ name : 'Delayne', lastName : 'dely', age : 23 }, 
			{ name : 'Gui', lastName : 'Sales', age : 25 }, 
			{ name : 'Fe', lastName : 'Ruivo', age : 28 }, 
			{ name : 'Leo', lastName : 'Japa', age : 22 }, 
		],
		tableKeys : [ 
			{ name : 'name', label : 'Nome', filter : true, background : '#6c7b84' }, 
			{ name : 'lastName', label : 'Sobrenome', filter : true, background : '#6c7b84' },
			{ name : 'age', label : 'Idade', filter : false, background : '#6c7b84' }
		],
		rowActions : [
			{ action: 'generateSingleReport', label: 'Gerar Report', image: require('../../public/report.png') }
		],
		mainLogo : require('../../public/huddle.png') ,
		secondaryLogo : require('../../public/gruposelpe.png')
    }),
    methods: {
		teste(data){
			console.log(data)
		}
	}
}
</script>
<style lang="scss" scoped>
    .dashboard{
		display: flex;
		flex-wrap: wrap;
	}

	.table-wrapper{
		width: 60%;
	}

</style>

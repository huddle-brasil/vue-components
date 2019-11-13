<template>
	<div id="app">
		<Sidebar 
			v-for="sidebar of sidebars" 
			:key="sidebar.title"
			:title="sidebar.title" 
			:navItems="sidebar.navItems" 
			:isCollapsable="sidebar.isCollapsable"
			></Sidebar>

		<table-default 
			:tableData="tableData" 
			:tableKeys="tableKeys"
			:select="true"
			primaryKey="name"
			@unselectedRow="(data) => teste(data)"
			@selectedRow="(data) => teste(data)"></table-default>
	</div>
</template>

<script>
import Sidebar from './components/sidebar/DefaultSidebar'
import TableDefault from './components/TableDefault'

export default {
	name: 'app',
	components: {
		TableDefault,Sidebar
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
		]
	}),

	created(){

	},
	methods: {
		teste(data){
			console.log(data)
		}
	}
}
</script>

<style >
	@import url('https://fonts.googleapis.com/css?family=Exo:200,400,700,900');
	@import 'assets/styles/reset.css';
	@import 'assets/styles/main.css';

	#app{
		display: flex;
	}

</style>

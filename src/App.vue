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
			:tableKeys="tableKeys"></table-default>
	</div>
</template>

<script>
import Sidebar from './components/sidebar/DefaultSidebar'
import TableDefault from './components/TableDefault'

export default {
	name: 'app',
	components: {
		Sidebar,TableDefault
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
			{ name : 'Vitor', age : 22 }, 
			{ name : 'Caroline', age : 20 },
			{ name : 'Gabi', age : 22 }, 
			{ name : 'Delayne', age : 23 }, 
			{ name : 'Gui', age : 25 }, 
		],
		tableKeys : [ { name : 'name', label : 'Nome', filter : true, background : '#fff' }, { name : 'age', label : 'Idade', filter : false, background : '#fff' }  ]
	}),

	created(){

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

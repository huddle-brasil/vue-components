<template>
	<div id="app">
		<router-view></router-view>
		<!-- <Navbar
			navPosition="left"
		></Navbar>
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
			:rowActions="rowActions"
			@unselectedRow="(data) => teste(data)"
			@selectedRow="(data) => teste(data)"></table-default> -->
	</div>
</template>

<script>
// import Sidebar from './components/sidebar/DefaultSidebar'
// import Navbar from './components/navbar/DefaultNavbar'
// import TableDefault from './components/tables/TableDefault'

export default {
	name: 'app',
	// components: {
	// 	TableDefault,
	// 	Sidebar,
	// 	Navbar
	// },

	data:()=>({
		sidebars:[
			{
				title: 'Processos',
				navItems: [
					{
						navHeader: 'Empresa 1',
						navChild: ['Programa de estágio 1','Programa de estágio 1.1'],
					},
					{
						navHeader: 'Empresa 2',
						navChild: ['Programa de estágio 2'],
					},
					{
						navHeader: 'Empresa 3',
						navChild: ['Programa de estágio 3'],
					},
				],
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
			{ action: 'generateSingleReport', label: 'Gerar Report', image: require('../public/report.png') }
		]
	})
}
</script>

<style >
	@import url('https://fonts.googleapis.com/css?family=Exo:200,400,700,900');
	@import 'assets/styles/reset.css';
	@import 'assets/styles/main.css';
	
</style>

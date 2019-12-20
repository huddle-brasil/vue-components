<template>
	<div id="app">
		<!-- <router-view></router-view> -->
		<Navbar navPosition="top" :navItems="navbar.navItems" :logo="navbar.logoPath">
		</Navbar>
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
			@selectedRow="(data) => teste(data)"></table-default>
	</div>
</template>

<script>
import Sidebar from './components/sidebar/DefaultSidebar'
import Navbar from './components/navbar/DefaultNavbar'
import TableDefault from './components/tables/TableDefault'

export default {
	name: 'app',
	components: {
		TableDefault,
		Sidebar,
		Navbar
	},

	data:()=>({
		navbar:{
			logoPath: '../../../huddle-logo.png',
			navItems: [
				{
					route: '',
					strokeColor: '',
					type: 'svg',
					source: `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.44 23.34"><defs><style>.cls-1{fill:none;stroke-miterlimit:10;}</style></defs><title>menu-icon</title><line class="cls-1" x1="6.98" y1="0.5" x2="21.44" y2="0.5"/><line class="cls-1" x1="6.98" y1="22.34" x2="21.44" y2="22.34"/><line class="cls-1" x1="6.98" y1="16.88" x2="21.44" y2="16.88"/><line class="cls-1" x1="6.98" y1="11.42" x2="21.44" y2="11.42"/><line class="cls-1" x1="6.98" y1="5.96" x2="21.44" y2="5.96"/><rect class="cls-1" x="0.5" y="0.5" width="3.41" height="22.34"/></svg>`
				},
				{
					type: 'svg',
					source: `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.51 27.39"><defs><style>.cls-1{fill:none;stroke-miterlimit:10;}</style></defs><title>money-icon</title><path class="cls-1" d="M17.85,5.63h-13a4,4,0,0,0-4,4h0a4,4,0,0,0,4,4h8.6a4,4,0,0,1,4,4v.3a4,4,0,0,1-4,4H.9" transform="translate(-0.4)"/><line class="cls-1" x1="8.97" x2="8.97" y2="5.63"/><line class="cls-1" x1="8.97" y1="21.76" x2="8.97" y2="27.39"/></svg>`,
					route: ''
				},
				{
					type: 'svg',
					source: `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.38 24.29"><defs><style>.cls-1{fill:none;stroke-miterlimit:10;}</style></defs><title>user-icon</title><circle class="cls-1" cx="10.69" cy="7.05" r="6.55"/><path class="cls-1" d="M21.09,24.83a10.19,10.19,0,0,0-20.38,0Z" transform="translate(-0.21 -1.04)"/></svg>`,
					route: ''
				}
			]
		},
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

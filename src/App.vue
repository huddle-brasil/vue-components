<template>
	<div id="app">
		<Sidebar 
			v-for="sidebar of sidebars" 
			:key="sidebar.title"
			:title="sidebar.title" 
			:navItems="sidebar.navItems" 
			:navItemsListType="sidebar.navItemsListType"></Sidebar>
	</div>
</template>

<script>
import Sidebar from './components/sidebar/DefaultSidebar'

export default {
	name: 'app',
	components: {
		Sidebar
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
			}
		]
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

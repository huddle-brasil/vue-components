<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <table-default 
      :tableData="tableData" 
      :tableKeys="tableKeys"></table-default>
  </div>
</template>

<script>
import TableDefault from './components/TableDefault'

export default {
  name: 'app',
  components: {
    TableDefault
  },
  data(){
    return{
      tableData : [ 
        { name : 'Vitor', age : 22 }, 
        { name : 'Caroline', age : 20 },
        { name : 'Gabi', age : 22 }, 
        { name : 'Delayne', age : 23 }, 
        { name : 'Gui', age : 25 }, 
      ],
      tableKeys : [ { name : 'name', label : 'Nome', filter : true, background : '#fff' }, { name : 'age', label : 'Idade', filter : false, background : '#fff' }  ]
    }
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

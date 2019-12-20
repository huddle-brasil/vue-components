<template>
    <div class="navbar" :class="navPosition">
        <div class="logo">
            <a href="">
                <img :src="logo" alt="">
            </a>
        </div>
        <div class="nav">
            <ul>
                <li v-for="(item, index) in navItems" :key="index">
                    <div class="menu-icon" v-html="item.source"></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        position:{
            type: String,
            default: 'top'
        },
        logo:{
            type: String,
            required: true
        },
        navItems:{
            type: Array
        },
        navPosition:{
            type: String,
            default: 'top'
        }
    }
}
</script>

<style lang="scss">
    .navbar{
        background-color: #252A2D;
        padding: 15px;
        display: flex;
        justify-content: space-between;
        
        .nav{

            ul{    
                display: flex;
            }

            .menu-icon{
                width: 23px;
                height: 23px;
                background-color: #373a3f;
                padding: 15px;
                margin: 0 10px;
                border-radius: 200px;
                display: flex;
                flex-direction: column;

                svg{
                    stroke: #fff581;
                }

                &:hover{
                    cursor: pointer;
                }
            }
        }
    }
    .navbar.left{
        // width: 35px;
        height: 100vh;
        flex-direction: column;
        align-items: center;
        position: fixed;
        z-index: 9;

        .nav ul{
            flex-direction: column;
        }
        .nav .menu-icon{
            margin: 10px 0;
        }
    }
</style>
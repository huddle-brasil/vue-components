<template>
    <div class="sidebar">
        <div class="sidebar-header">
            <div class="header-title">{{title}}</div>
            <div class="header-collapse">
                <div class="arrow-left"></div>
            </div>
        </div>
        <div class="sidebar-content">
            <ul>
                <li v-for="(item, index) of navItems" :key="index">
                    <div :class="[navItemsListType == 'dot' ? 'dot' : 'arrow']"></div>
                    {{item}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        title:{
            type: String,
            required: true
        },
        navItems:{
            type: Array,
            required: true
        },
        navItemsListType:{
            type: String,
            default: 'dot'
        }
    }
}
</script>

<style lang="scss">
    .sidebar{
        display: flex;
        flex-direction: column;
        width: 300px;
        height: 100vh;
        color: #ffffff;
        background-color: #2F353A;

        &:nth-of-type(odd){
            background-color: #252A2D;

            .sidebar-header{
                background-color: #2F353A;
            }
        }

        .sidebar-header{
            display: flex;  
            background-color: #383F44;
            text-transform: uppercase;
            letter-spacing: 3px;
            justify-content: space-between;
            font-weight: 600;

            .header-title{
                width: 85%;    
                padding: 15px 32px;
            }

            .header-collapse{
                padding: 0 15px;
                width: 15%;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;

                &:hover{
                    cursor: pointer;
                }
            }
        }

        .sidebar-content{
            padding: 32px;
            letter-spacing: 1px;

            ul>li{
                padding: 0 0 15px;
                display: flex;
                align-items: center;

                .dot{
                    width: 5px;
                    height: 5px;
                    background-color: #FFF581;
                    border-radius: 100px;
                }

                .arrow{
                    width: 0; 
                    height: 0; 
                    border-top: 5px solid transparent;
                    border-bottom: 5px solid transparent; 
                    border-left:5px solid #FFF581; 

                }

                .dot, .arrow{
                    margin: 0 15px 0 0;
                }

                &:not(:last-child){
                    padding: 0 0 15px;
                }
            }
        }

        .arrow-right {
            width: 0; 
            height: 0; 
            border-top: 60px solid transparent;
            border-bottom: 60px solid transparent;
            
            border-left: 60px solid green;
        }
        .arrow-left {
            width: 0;
            height: 0;
            border-top: 4px solid transparent;
            border-bottom: 5px solid transparent;
            border-right: 5px solid #7b7b7b;
        }
    }
</style>
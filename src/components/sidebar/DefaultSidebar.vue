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
                <li v-for="(item, index) of navItems" :key="index" @click="toggleCollapseNavItem($event)" :class="{'isCollapsable' : isCollapsable}">
                    <div class="item" >
                        <div :class="[isCollapsable ? 'arrow' : 'dot']"></div>
                        <span>{{item}}</span>
                    </div>
                    <div class="item-collapsable"  v-if="isCollapsable">
                        <span>isCollapsable: {{isCollapsable}}</span>
                    </div>
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
        isCollapsable:{
            type: Boolean,
            default: false
        }
    },

    data:()=>({}),

    methods: {
        toggleCollapseNavItem(event){
            if(event.currentTarget.classList.contains('isCollapsable')) {
                console.log('event.currentTarget 1: ', event.currentTarget)
                event.currentTarget.classList.toggle(["show","active"])
            }
        }
    },
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
            margin: 15px 0;
            letter-spacing: 1px;

            ul>li{
                display: flex;
                line-height: 20px;
                flex-direction: column;

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
                    transition: transform .2s
                }

                .dot, .arrow{
                    margin: 0 15px 0 0;
                }

                .item{
                    display: flex;
                    align-items: center;
                    padding: 15px 32px !important;
                    
                    &:not(:last-child){
                        padding: 0 0 15px;
                    }

                }
                .item.active{
                    background-color: #76FFF5;
                    color: #333;
                    font-weight: 700;            
                }
                .item-collapsable{
                    padding: 15px 32px;
                    background-color: #383f44;
                    display: none;
                }

                &:hover{
                    cursor: pointer;
                }
            }

            .show{
                .item-collapsable{
                    display: flex
                }
            }

            ul>li.show {
                    .item{
                        .arrow{
                            transform: rotate(90deg)
                        }
                    }
                }

            ul>li.active{
                background-color: #76FFF5;
                color: #333;
                font-weight: 700;            
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

        &:nth-of-type(odd){
            .sidebar-content{
                ul>li.active{
                    background-color: #44E5DD;
                    color: #333;
                    font-weight: 700;            
                }
            }
        }
    }
    .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 0;
}
</style>
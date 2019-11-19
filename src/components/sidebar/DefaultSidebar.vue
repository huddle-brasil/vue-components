<template>
    <div class="sidebar">
        <div class="sidebar-header">
            <div class="header-title">{{title}}</div>
            <div class="header-collapse" @click="toggleCollapseHeader($event)">
                <div class="arrow-left"></div>
            </div>
        </div>
        <div class="sidebar-content">
            <ul>
                <li v-for="(item, index) of navItems" :key="index">
                    <div class="item" @click="toggleCollapseNavItem(index, $event)" :class="{'isCollapsable' : isCollapsable}">
                        <div :class="[isCollapsable ? 'arrow' : 'dot']"></div>
                        <span>{{item.navHeader}}</span>
                    </div>
                    <div class="collapsable" ref="collapsable">
                        <div class="item-collapsable" @click="toggleActive($event)" v-for="child of item.navChild" :key="child.navChild">
                            <div class="dot"></div>
                            <span>{{child}}</span>
                        </div>
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
        },
        haveSideMenu: {
            type: Boolean,
            default: false
        }
    },

    methods: {
        toggleCollapseNavItem(index, event){
            if(event.currentTarget.classList.contains('isCollapsable')) {
                event.currentTarget.classList.toggle('active')
                for (const child of this.$refs.collapsable[index].children) child.classList.toggle('show')
            }
        },
        toggleActive(event){
            for (const child of document.querySelectorAll('.item-collapsable')) child.classList.remove('active')
            event.currentTarget.classList.add('active')
        },
        toggleCollapseHeader(event){for (const path of event.path) if(path.classList && path.classList.contains('sidebar')) path.classList.toggle('closed')}
    },
}
</script>

<style lang="scss">
    .sidebar{
        display: flex;
        flex-direction: column;
        width: 300px;
        height: 100vh;
        color: #CFDCE5;
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

                    &:hover{
                        background-color: #1D1D1B;
                    }

                }
                .item.active{
                    background-color: #474F54;
                    color: #76FFF5;
                    font-weight: 700;            
                }
                .item-collapsable{
                    padding: 15px 32px;
                    background-color: #3B4247;
                    color: #ffffff;
                    font-weight: 100;
                    display: none;
                    align-items: center;
                }
                .item-collapsable.active{
                    background-color: #76FFF5;
                    color: #2F353A;
                    font-weight: 700;
                    z-index: 9;

                    .dot{
                        background-color: #000
                    }

                }

                &:hover{
                    cursor: pointer;
                }
            }

            .show.item-collapsable{
                display: flex;                    
            }
            

            ul>li{
                .active {
                    .arrow{
                        transform: rotate(90deg)
                    }
                }
            }


            ul>li{
                .active{
                    .item{
                        background-color: #333;
                        color: #76FFF5;
                        font-weight: 700;            
                    }
                    .arrow{
                        border-left: 5px solid #76FFF5;
                    }
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

        &:nth-of-type(odd){
            .sidebar-content{
                ul>li.active{
                    background-color: #474F54;
                    color: #76FFF5;
                    font-weight: 700;            
                }
            }
        }
    }
    .sidebar.closed{    
        max-width: 100px;

        .sidebar-header{
            writing-mode: tb;
            height: 100vw;
            text-orientation: upright;
            justify-content: flex-end;
            flex-direction: row-reverse;
            align-items: baseline;
            padding: 20px 10px 0 0;

            .header-collapse{
                transform: rotate(180deg);
            }
            .header-title{
                width: 0;
                padding: 32px;
            }
        }
        .sidebar-content{
            display: none;
        }
    }
</style>
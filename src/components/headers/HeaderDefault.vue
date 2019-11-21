<template>
    <div class="header-default">
        <div class="logo-wrapper">
            <img :src="mainLogo" alt="" class="main-logo">
        </div>
        <div class="profile-wrapper">
            <div class="secondary-logo">
                <img :src="secondaryLogo" alt="">
            </div>
            <div class="risk"></div>
            <div class="logout" @click="logout()">
                Sair
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        mainLogo : {},
        secondaryLogo : {},
        logoutAction : {
            type: String,
            required: true
        }
    },
    methods: {
        logout(){
            this.$emit(this.logoutAction)
        }
    }
}
</script>
<style lang="scss" scoped>
    .header-default{
        width: 100%;
        background-color: #85efe9;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 55px;

        .profile-wrapper, .logo-wrapper{
            width: 50%;
            display: flex;
            align-items: center;
            padding: 0 10px;
        }

        .logo-wrapper{

            .main-logo{
                height: 20px;
            }
        }

        .profile-wrapper{
            justify-content: flex-end;

            .secondary-logo{
                display: flex;
                align-items: center;

                img{
                    height: 20px;
                }
            }

            .risk{
                height: 10px;
                width: 1px;
                background-color: black;
                margin: 0 10px;
            }

            .logout{
                cursor: pointer;
                letter-spacing: 2px;
                text-transform: uppercase;
                font-size: 13px;
            }
        }
    }
</style>

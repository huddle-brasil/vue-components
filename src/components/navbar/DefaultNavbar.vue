<template>
    <div class="navbar" :class="navPosition">
        <div class="logo">
            <a href="">
                <img src="" alt="">
            </a>
        </div>
        <div class="nav">
            <ul>
                <li>item</li>
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
        }
    }
}
</script>

<style lang="scss">
    .navbar{}
    .navbar.top{}
    .navbar.left{}
</style>
<template>
    <div class="navbar" :class="navPosition">
        <span>navbar</span>
    </div>
</template>

<script>
export default {
    props:{
        navPosition:{
            type: String,
            default: 'top'
        }
    }
}
</script>

<style lang="scss">
    .navbar{

    }
    .navbar.top{}
    .navbar.left{}
</style>
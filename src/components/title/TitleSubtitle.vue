<template>
    <div class="title-subtitle">
        <p class="title">{{ title }}</p>
        <p class="subtitle">{{ subtitle }}</p>
    </div>
</template>
<script>
export default {
    props: {
        title : {
            type : String,
            required: true
        },
        subtitle : {
            type : String,
            required: true
        }
    }
}
</script>
<style lang="scss" scoped>
    .title-subtitle{
        text-align: center;
        .title{
            color: white;
            font-weight: bold;
            letter-spacing: 1px;
        }
        .subtitle{
            margin-top: 10px;
            font-size: 20px;
            color: rgba(255, 255, 255, 0.755);
            letter-spacing: 1px;
        }
    }
</style>

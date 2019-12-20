<template>
    <div class="flow-history">
        <div class="historic" v-for="(historic, index) in historical" :key="index"> 
            <span class="index">{{index + 1}}.</span>
            <div class="historical-info">
                <span class="historical-title">
                    {{ historic.title }}
                </span>
                <span class="historical-item">{{ historic.item }}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        historical: {
            type: Array,
            required: true
        }
    }
}
</script>
<style lang="scss" scoped>
    .flow-history{
        .historic{
            display: flex;
            align-items: flex-start;
            color: white;
            margin-bottom: 10px;

            .index{
                width: 30px;
                font-size: 12px;
            }

            .historical-info{
                display: flex;
                flex-direction: column;

                .historical-title{
                    text-transform: uppercase;
                    font-size: 9px;
                    letter-spacing: 1px;
                }
                .historical-item{
                    color: #FFF581;
                    font-size: 13px;
                    font-weight: bold;
                    margin-top: 3px;
                }
            }
        }
    }
</style>

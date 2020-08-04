<!-- 总览 -->
<template>
    <div class="overview">
        <!-- 今日实时看板开始 -->
        <div class="overview-today-timing">
        <!-- 今日实时看板头部开始 -->
        <div class="today-timing-top">
            <h3>今日实时看板</h3>
            <ul>
            <li>时间</li>
            <li>
                <span>比昨日</span>
                <ul>
                <li>比昨日</li>
                <li>比上一周</li>
                </ul>
            </li>
            </ul>
        </div>
        <!-- 今日实时看板头部结束 -->
        <!-- 图标开始 -->
        <div class="today-timing-table">
            <ul>
            <li>
                <span>
                <span></span>
                <i></i>
                </span>
                <em></em>
                <p>
                <span></span>
                <i></i>
                <b></b>
                </p>
            </li>
            </ul>
            <div></div>
        </div>
        <!-- 图标结束 -->
        </div>
        <!-- 今日实时看板结束 -->
        <!-- 历史数据概览开始 -->
        <div class="history-data">
        <div class="history-data-top">
            <h3>历史数据概览</h3>
            <p>
            此处展示为真实数据，不影响用户端排名保护与销量展示。详情请见<a
                href="#"
                >疫情期间月售数据保护说明</a
            >
            </p>
            <div>
            <ul>
                <li>昨天</li>
                <li>近七天</li>
                <li>近30天</li>
                <li>自定义</li>
                <li>按周</li>
                <li>按月</li>
            </ul>
            <div>
                <p>时间</p>
                <p>
                比前
                <em></em>
                </p>
            </div>
            </div>
        </div>

        <div class="history-data-content"></div>
        </div>
        <!-- 历史数据概览结束 -->
    </div>
</template>

<script>
export default {
    name: "",
    components: {},
    data() {
        return {};
    },
    computed: {},
    watch: {},
    methods: {},
    created() {},
    mounted() {},
    beforeCreate() {},
    beforeMount() {},
    beforeUpdate() {},
    updated() {},
    beforeDestroy() {},
    destroyed() {},
    activated() {},
};
</script>
<style lang="less" scoped>
.overview {
    width: 920px;
    margin: 0 auto;
    .overview-today-timing {
        margin-bottom:20px ;
    .today-timing-top {
        display: flex;
        justify-content: space-between;
        h3 {
            color: #303133;
            font-size: 16px;
            font-weight: 400;
        }
        >ul {
            display: flex;
            justify-content: space-evenly;
            color: #303133;
            font-size: 12px;
            font-weight: 400;
            >li{
                padding-right: 20px;
                line-height: 12px;
                height: 12px;
                padding-left: 20px;
            }
            >li:nth-child(2){
                border-left: 1px #666667 solid;
                position: relative;
                >ul {
                    position: absolute;
                    width: 70px;
                    height: 70px;
                    border: 1px solid rgb(189, 186, 186);
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    background-color: #fff;
                    align-items: center;
                    margin-left:-20px;
                    margin-top: 10px;
                    display: none;
                }
            }
        }
    }

    .today-timing-table {
        ul {
            li {
            span {
                span {
                }

                i {
                }
            }

            em {
            }

            p {
                span {
                }

                i {
                }

                b {
                }
            }
            }
        }

        div {
        }
        }
    }

    .history-data {
        .history-data-top {
        h3 {
        }

        p {
            a {
            }
        }

        div {
            ul {
            li {
            }
            }

            div {
            p {
            }
            }
        }
        }

        .history-data-content {
        }
    }
}
</style>

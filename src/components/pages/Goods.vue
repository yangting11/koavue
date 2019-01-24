<template>
    <div>
        <div class="topimage-div">
            <img :src="goodsInfo.IMAGE1" width="100%"/>
        </div>

        <div class="topimage-div">
            <img :src="goodsInfo.IMAGE1" width="100%"/>
        </div>
        <div class="goods-name">{{goodsInfo.NAME}}</div>
        <div class="goods-price">价格：{{goodsInfo.PRESENT_PRICE}}</div>
        <div>
            <van-tabs >
            <van-tab title="商品详情">
            <div class="detail" v-html="goodsInfo.DETAIL">
            </div>
            </van-tab>
            <van-tab title="评价">
                正在制作中
            </van-tab>
            </van-tabs>
        </div>
</div>
</template>
<script>
    import axios from 'axios'
    import url from '@/serviceAPI.config.js'
    import { Toast } from 'vant'
    export default {
        data() {
            return {
                goodsId: '',
                goodsInfo:{},   //商品详细数据
            }
        },
        created(){
            if(this.$route.query.goodsId){
                this.goodsId= this.$route.query.goodsId
            }
            this.getInfo()
        },
        methods: {
            onClickLeft(){
                this.$router.go(-1)
            },
            getInfo() {
                axios({
                    url:url.getDetailGoodsInfo,
                    method:'post',
                    data:{
                        goodsId:this.goodsId
                    }
                })
                .then(response=>{
                    if(response.data.code == 200 && response.data.message ){
                         this.goodsInfo = response.data.message 
                    }else{
                        Toast('服务器错误，数据取得失败')
                    }
                    console.log( this.goodsInfo)
                })
                .catch(error=>{
                    console.log(error)
                })
            }
        },
    }
</script>
<style scoped>
   .detail{
     font-size:0px;
    }
    .goods-name{
        background-color: #fff;
    }
    .goods-price{
        background-color: #fff;
    }
</style>
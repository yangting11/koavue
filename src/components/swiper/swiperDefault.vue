<template>
  <div >
      <swiper v-if="!giveData"> 
        <swiper-slide class="swiper-slide" v-for="(item, index) in slide" :key="index">
           Slide {{item}} 
        </swiper-slide>
      </swiper>
      <swiper :options="swiperOption" v-else> 
        <swiper-slide v-for=" (item ,index) in giveData" :key="index">
            <div class="recommend-item">
                    <img :src="item.image" width="80%" />
                    <div>{{item.goodsName}}</div>
                    <div>￥{{item.price | moneyFilter}} (￥{{item.mallPrice | moneyFilter}})</div>
            </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
  </div>
</template>
<script>
    import {toMoney} from '@/filter/moneyFilter.js'
    import 'swiper/dist/css/swiper.css' 
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        data() {
            return {
                slide: [1,2,3,4,5,6],
                swiperOption:{
                    loop:true,
                    pagination:{
                        el:'.swiper-pagination'
                    }
                }
            }
        },
        props:['giveData'],
        components:{swiper,swiperSlide},
        filters:{
            moneyFilter(money){
                return toMoney(money)
            }  
        },
        methods:{
            clickSon(){
                this.$emit('clickParent')
            }
        }
    }
</script>
<style scoped>
  .recommend-area{
       background-color: #fff;
       margin-top: .3rem;
  }
  .recommend-title{
      border-bottom:1px solid #eee;
      font-size:14px;
      padding:.2rem;
      color:#e5017d;
  }
    .recommend-body{
       border-bottom: 1px solid #eee;
   }
  .recommend-item{
      width:100%;
      border-right: 1px solid #eee;
      font-size: 12px;
      text-align: center;
  }
</style>
<template>
  <div class="main">
    <div class="heads">
      <!-- 到路由页面 -->
      <router-link to="/cityList">
      <div class="hleft">
        全部地区
      </div>
      </router-link>
      <div class="hright">
        <!-- 到路由页面 -->
        <router-link to="/search">
        <input type="text" placeholder="请输入相关企业名称">
        </router-link>
      </div>
    </div>

    <div class="lunbo">
      <!-- 这是轮播位置 -->
      <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in lunbo">
              <img :src="item.img" alt="">
            </div>
          </div>
        </div>
      <!-- 这是轮播位置 -->

      <div class="lunshang">
        <div class="lsitem" v-for="(item,index) in lsitem">
          <div class="lsit"><img :src="item.img" alt=""></div>
          <div class="lsib">{{item.names}}</div>
        </div>
      </div>
    </div>

    <div class="list">
      <div class="listicon" v-for="(item,index) in listicon" @click="tonext(item.routes)">
        <div class="litop"><img :src="item.img" alt=""></div>
        <div class="libtm">{{item.names}}</div>
        </router-link>
      </div>
    </div>

    <div class="ads">
      <div class="left">
        <div>个人中心</div>
        <img src="../../../static/image/personal.png" alt="">
      </div>
      <div class="right">
        <div>商家入驻</div>
        <img src="../../../static/image/store.png" alt="">
      </div>
    </div>

    <div class="zuixinruzhu">
       <div class="ztop">
         <div class="ztleft">最新入驻>></div>
         <div class="ztright">我要入驻</div>
       </div>
       <div class="zbtm">
          <div class="zbitem" v-for="(item,index) in zuixinruzhu">
             <div class="zbit">
               <img :src="item.thumb" alt="">
             </div>
             <div class="zbib">{{item.username}}</div>
          </div>
       </div>
    </div>

    <div class="jiaxiaoliebiao">
       <div class="jxtop">驾校列表>></div>
       <div class="jxbtm">
         <div class="jsbl"></div>
         <div class="jsbr"></div>
       </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  export default {
    data() {
      return {
        lsitem: [{
          names: "司机招聘",
          img: '/static/image/sijizhaopin.png'
        }, {
          names: "驾校报名",
          img: '/static/image/jiaxiaobaoming.png'
        }, {
          names: "我的",
          img: '/static/image/wode.png'
        }],
        listicon: [{
          names: "驾校",
          img: '/static/image/jiaxiao.png',
          routes:'/jiaxiao'
        }, {
          names: "客运企业",
          img: '/static/image/keyunqiye.png',
          routes:'/keyun'
        }, {
          names: "货运企业",
          img: '/static/image/huoyunqiye.png',
          routes:'/huoyun'
        }, {
          names: "同城物流",
          img: '/static/image/tongchengwuliu.png'
        }, {
          names: "拼车",
          img: '/static/image/pinche.png'
        }, {
          names: "新车",
          img: '/static/image/xinche.png'
        }, {
          names: "二手车",
          img: '/static/image/ershouche.png'
        }, {
          names: "修理厂",
          img: '/static/image/xiulichang.png'
        }, {
          names: "健康理疗",
          img: '/static/image/jiankangliliao.png'
        }, {
          names: "房车租赁",
          img: '/static/image/fangchezulin.png'
        }],
        lunbo:[
          {img: '/static/image/lunbotu/1.jpg'},
          {img: '/static/image/lunbotu/2.jpg'},
          {img: '/static/image/lunbotu/3.jpg'},
        ],
        zuixinruzhu:[]
      }
    },
    created(){
        this.$axios.post('/api/api/zuixingruzhu').then((res)=>{
          console.log(res.data.data)
          this.zuixinruzhu=res.data.data
        })
    },
    mounted(){
      //轮播js应该放在mouted里面
      var swiper = new Swiper('.swiper-container', {
      				autoplay:true,
      				loop:true
      			});
    },
    methods:{
      tonext:function(thisroute){
        console.log(thisroute)
        this.$router.push({path:thisroute})
      }
    }
  }
</script>

<style scoped lang="less">
  @import '../../../node_modules/swiper/css/swiper.css';
  .main {
    font-size:14px;
    width: 100%;
    height: 100%;
    background:rgba(224,224,224,1);
    display: flex;
    flex-direction: column;
    overflow:scroll;
    // 去除路由跳转a标签css样式
    a{text-decoration: none;}
    .heads {
      width: 100%;
      background: #73A065;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px 0;
      .hleft{
         text-decoration: none;
         width:120px;
         font-size: 16px;
         color: #fff;
         box-sizing: border-box;
         padding-left: 35px;
         background: url(../../../static/image/dingwei.png) no-repeat 5px center;
         background-size:30px;
      }
      .hright{
        flex: 1;
        input{
          width: 250px;
          height: 30px;
          border: none;
          border-radius: 15px;
          outline: none;
          text-indent: 3em;
          background:#fff url(../../../static/image/search.png) no-repeat 10px;
        }
      }
    }

    .lunbo {
      height: 150px;
      background: lightblue;
      position: relative;
      background: #B1B4B3;
      .swiper-container{
        width: 100%;
        height: 150px;
        .swiper-slide{
          img{width: 100%;height:auto;}
        }
      }
      .lunshang {
        position: absolute;
        bottom: -40px;
        left: 10%;
        background: #fff;
        display: flex;
        width: 80%;
        height: 80px;
        border-radius: 10px;
        z-index: 10;

        .lsitem {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          .lsit {
            width: 30px;
            height: 32px;

            img {
              width: 100%;
              height: 100%;
            }
          }

          .lsib {
            margin-top: 7px;
          }
        }
      }
    }

    .list {
      width: 100%;
      margin-top: 50px;
      display: flex;
      flex-wrap: wrap;

      .listicon {
        width: 20%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .litop {
          width: 45px;
          height: 45px;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .libtm {
          margin: 5px;
        }
      }
    }
    .ads{
      width: 100%;
      display: flex;
      .left{
        width: 280px;
        height: 70px;
        background: #FFBD67;
        margin-left: 15px;
        margin-right: 5px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        color:#fff;
        img{
          margin-left: 5px;
          height: 40px;
          width: auto;
        }
      }
      .right{
        width: 280px;
        height: 70px;
        background: #AB91E8;
        margin-left: 5px;
        margin-right: 15px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        color:#fff;
        img{
          margin-left: 5px;
          height: 40px;
          width: auto;
        }
      }
    }
    .zuixinruzhu{
      display: flex;
      flex-direction: column;
      margin: 0 10px;
      background: #fff;
      border-radius: 15px;
      margin-top: 10px;
      box-sizing: border-box;
      padding: 5px 7px;
      .ztop{
        display: flex;
        justify-content: space-between;
        height: 40px;
        line-height: 40px;
        .ztleft{
          font-size: 18px;
        }
        .ztright{
          font-size: 14px;
        }
       }
       .zbtm{
         display: flex;
         overflow-x:auto;display:-webkit-box;
         .zbitem{
           width: 140px;
           height: 148px;
           margin-right: 8px;
           .zbit{
             height: 80px;
             border-radius: 15px;
             box-shadow:2px 2px 8px lightblue;
             overflow: hidden;
             img{
               width: 100%;
               height: 100%;
             }
           }
           .zbib{
             color: #666;
             padding: 4px;
             width: 100px;
           }
         }
       }
    }
  }
</style>

<template>
  <div class="big">
     <div class="top">
       <div class="huiyuan">会员中心</div>
       <div class="fs">普通粉丝</div>
       <div class="headlist">
         <div class="heads"></div>
         <div class="login">未登录</div>
       </div>
     </div>
     <div class="btm">
         <div class="blist" v-for="(item,index) in list">
           <div class="ll">
             <img :src="item.img" alt="">
             {{item.names}}
            </div>
           <div class="lr"></div>
           <div class="jiao"></div>
         </div>
     </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
         list:[
           {names:'我的收藏',img:'../../../static/image/shoucang.png'},
           {names:'实名认证',img:'../../../static/image/shiming.png'},
           {names:'身份升级',img:'../../../static/image/shengji.png'},
           {names:'驾校管理',img:'../../../static/image/jiaxiaoguanli.png'},
           {names:'企业管理',img:'../../../static/image/qiyeguanli.png'},
           {names:'客服热线',img:'../../../static/image/rexian.png'},
           {names:'邀请好友',img:'../../../static/image/yaoqing.png'},
           {names:'个人简历',img:'../../../static/image/jianli.png'},
           {names:'我的投递',img:'../../../static/image/toudi.png'},
           {names:'我的报名',img:'../../../static/image/baoming1.png'},
           {names:'物流管理',img:'../../../static/image/wuliu.png'},
           {names:'修理厂管理',img:'../../../static/image/xiulichang1.png'},
           {names:'新车管理',img:'../../../static/image/xinche1.png'},
           {names:'二手车管理',img:'../../../static/image/ershouche1.png'},
           {names:'汽车理疗',img:'../../../static/image/liliao.png'},
           {names:'租赁管理',img:'../../../static/image/zulin.png'}
         ]
      }
    },
    methods:{

    }
  }
</script>

<style scoped lang="less">
.big{
   width: 100%;
   height: 100%;
   background:#fff url(../../../static/image/bg1.png) no-repeat;
   background-size: 100%;
   box-sizing: border-box;
   padding: 0 20px;
   .top{
       color: #fff;
       box-sizing: border-box;
       padding: 0 10px;
       .huiyuan{
         padding-top: 50px;
         font-size: 25px;
       }
       .fs{
         padding-top: 20px;
         font-size: 20px;
       }
       .headlist{
           display: flex;
           flex-direction:column;
           justify-content: space-around;
           align-items: center;
           width: 100px;
           height: 200px;
          .heads{
            width:100px;
            height: 100px;
            background: lightblue;
            border-radius: 50%;
            color: #fff;
            margin-top: 60px;
          }
          .login{
            color: #5AA658;
            font-size: 15px;
          }
       }
    }
    .btm{
       .blist{
           display: flex;
           align-items: center;
           height: 40px;
           .ll{
             font-size:15px;
             width: 100px;
             box-sizing: border-box;
             display: flex;
             align-items: center;
             img{
               height: 17px;
               width: 17px;
               padding-right: 5px;
             }
             }
           .lr{
             flex: 1;
             border-bottom: 1px solid #AAAAAA;
             margin-top: 13px;
             }
            .jiao{
              width: 10px;
              height: 10px;
              background: url(../../../static/image/next1.png) no-repeat right center;
              background-size: 80%;
            }
       }
    }
}
</style>

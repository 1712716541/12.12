<template>
  <div class="routeBack">
     <div class="rl" @click="goback"><img src="static/image/fanhui.png" alt=""></div>
     <div class="rr">{{nowPageName}}</div>
  </div>
</template>

<script>
  export default{
     data(){
       return{
         
       }
     },
     created(){
       console.log(this.$router.history.current.name,this.$route.name)
     },
     methods:{
       goback:function(){
         //返回上一层
         this.$router.go(-1);
       }
     },
     computed:{
        nowPageName:function(){
          return this.$route.name
        }
     }
  }
</script>

<style scoped lang="less">
.routeBack{
  width: 100%;
  height: 40px;
  background: #73A065;
  display: flex;
  align-items: center;
  .rl{
    padding-left:20px;
    img{
      height:18px;
      width: auto;
      margin-top: 3px;
    }
  }
  .rr{
    color: #fff;
    font-size: 18px;
    padding-left: 20px;
  }
}
</style>

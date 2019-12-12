<template>
  <div class="box">
      <div class="distanceitem" v-for="(item,index) in distanceitem">
         {{item.names}}
      </div>
    </div>
</template>

<script>
  export default{
    data(){
      return{
        distanceitem:[
          {names:'不限'},
          {names:'1km以内'},
          {names:'1km-5km'},
          {names:'5km-10km'},
          {names:'10km-20km'},
          {names:'20km以上'}
        ]
      }
    }
  }
</script>

<style scoped="scoped" lang="less">
  .box{
    .distanceitem{
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #ccc;
    }
  }
</style>

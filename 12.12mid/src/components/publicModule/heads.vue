<template>
  <div class="heads">
    <router-link to="/cityList">
    <div class="hleft">
      全部地区
    </div>
    </router-link>
    <div class="hright">
      <input type="text" placeholder="请输入相关企业名称">
    </div>
  </div>
</template>

<script>
</script>

<style scoped lang="less">
  .heads {
    width: 100%;
    background: #73A065;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    a{text-decoration: none;}
        .hleft{
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
</style>

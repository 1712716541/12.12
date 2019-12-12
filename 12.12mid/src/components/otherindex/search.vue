<template>
  <div class="bigsearch">
    <!-- back -->
    <routeBack></routeBack>
    <!-- head -->
    <heads></heads>

    <div class="smain">
        <div class="smtop">
           <div class="smtcon">
               <div class="quyu" v-for="(item,index) in listitem"
               @click="todetail(item.routes,index)"
               v-bind:class="{addclass:activecolor==index}">{{item.names}}</div>
           </div>
        </div>
        <div class="smbtm">
             <router-view/>
        </div>
    </div>
  </div>
</template>

<script>
  import routeBack from '../publicModule/routeBack'
  import heads from '../publicModule/heads'
  export default{
    components:{
      'routeBack':routeBack,
      'heads':heads
    },
    data(){
      return{
           listitem:[
             {names:'区域',routes:'/search/quyu'},
             {names:'距离',routes:'/search/juli'}
           ],
           activecolor:0
       }
    },
    methods:{
      todetail:function(thisroute,acindex){
        console.log(thisroute)
        this.$router.push({path:thisroute})
        this.activecolor=acindex
      }
    }
  }
</script>

<style scoped="scoped" lang="less">
  .addclass{background:#FFBD67;color: #fff;}

  .bigsearch{
    .smain{
      .smtop{
        border-bottom: 1px solid #666666;
        .smtcon{
          height: 30px;
          border-radius: 15px;
          border: 1px solid #FFBD67;
          display: flex;
          line-height: 30px;
          text-align: center;
          margin: 0 10px;
          .quyu{flex: 1;height: 30px;border-radius: 15px;}
        }
      }
      .smbtm{
          margin: 0 10px;
         .smbitem{
           display: flex;
           .smbileft{
               width: 150px;
               height: 90px;
               border: 1px solid #000;
               img{
                  width: 100%;
                  height: 100%;
               }
           }
         }
      }
    }
  }
</style>

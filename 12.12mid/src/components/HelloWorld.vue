<template>
  <div class="hello">
       <div class="mains">
          <router-view/>
       </div>
       <div class="btm">
           <div class="bitm" v-for="item,index in footerlist" @click="changePage(item.routepath,index)">
                 <div class="img">
                   <img :src="index==nowindex?item.img:item.img2" alt="">
                 </div>
                 <div class="fontlist" :style="{'color':(index==nowindex?'#fff':'#003300')}">{{item.names}}</div>
           </div>
       </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
       nowindex:'',
       footerlist:[{
          names:"首页",
          img:'/static/image/ruzhu1.png',
          img2:'/static/image/ruzhu2.png',
          routepath:'/mainindex'
       },{
          names:"入驻",
          img:'/static/image/shouye1.png',
          img2:'/static/image/shouye2.png',
          routepath:'/mainruzhu'
       },{
          names:"我的",
          img:'/static/image/my1.png',
          img2:'/static/image/my2.png',
          routepath:'/mainwode'
       }]
    }
  },
  methods:{
    changePage:function(savepath,thisindex){
      this.$router.push({path:savepath}) //添加路由路径
      console.log(thisindex)
      this.nowindex=thisindex
      // console.log(this.$router.options.routes[0].children)
      // console.log(this.$router.options.routes[0].path)
      // console.log(this.$router.options.routes[0].name)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{width: 100%;height: 100%;display: flex;flex-direction: column;}

.hello .mains{flex: 1;overflow: scroll;background: #fff;}
.hello .btm{height: 65px;width: 100%;display: flex;background: #73A065;}
.hello .btm .bitm{flex: 1;
display: flex;flex-direction: column;align-items: center;justify-content: center;}
.hello .btm .bitm .img img{width: 35px;height:35px;}


</style>

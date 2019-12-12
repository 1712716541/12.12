<template>
  <div class="jieshao">
    <routeBack></routeBack>

    <div id="box">
      <div class="swiperandhead">
        <!-- Swiper -->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in lunbo">
              <img :src="item.img" alt="">
            </div>
          </div>
          <!-- Add Pagination -->
          <!-- <div class="swiper-pagination"></div> -->
        </div>
        <div class="myhead">
          <img :src="thumb" alt="">
        </div>
        <div class="heads">
          <div class="company">{{company}}</div>
          <div class="times">
            <div class="icon"></div>
            <div class="xtime">上班时间 {{starttime}}-{{endtime}}</div>
          </div>
          <div class="places">
            <div>{{address}}</div>
            <div class="dituicon"></div>
          </div>
        </div>
        <div class="qiye">
          <div class="qtop">
            <div class="qyjs" v-for="item in items" v-on:click="qijie(item.indexs)" v-bind:class="{addclass:activeColor==item.indexs}">
              {{item.names}}</div>
            <!-- <div class="zxxx" v-on:click="qixin" v-on:click="changeC(this)">在线信息</div> -->
          </div>
          <div class="qbtm">

          </div>
        </div>
      </div>
    </div>
 </div>
</template>

<script>
  // import routeBack from '../../publicModule/routeBack'
  // import Swiper from 'swiper'
  // export default {
  //   components: {
  //     'routeBack': routeBack
  //   },
  //   mounted() {
  //     //轮播js应该放在mouted里面
  //     var swiper = new Swiper('.swiper-container', {
  //       autoplay: true,
  //       loop: true
  //     });
  //   },
  //   data: function() {
  //     return {
  //       activeColor: 1,
  //       items: [{
  //           names: "企业介绍",
  //           indexs: 1
  //         },
  //         {
  //           names: "在线信息",
  //           indexs: 2
  //         }
  //       ],
  //       company: '',
  //       starttime: '',
  //       endtime: '',
  //       address: '',
  //       thumb: '',
  //       jianjie: '',
  //       lunbo: ''
  //     }
  //   },
  //   created() {
  //     console.log('这是钩子函数')
  //     //页面显示时默认加载

  //     var that = this;
  //     //获取token
  //     var token = api.getGlobalData({
  //       key: 'token'
  //     });
  //     console.log("电话:" + token.tel + "  ,  token:" + token.token)

  //     //调用数据
  //     this.$axios.post('https://minipro.sazjob.com/mnappapi/companyxiangqing', {
  //       phone: token.tel
  //     }, {
  //       headers: {
  //         token: token.token
  //       },
  //     }).then((res) => {
  //       that.company = res.data.data.company,
  //         that.starttime = res.data.data.starttime,
  //         that.endtime = res.data.data.endtime,
  //         that.address = res.data.data.address,
  //         that.thumb = res.data.data.thumb,
  //         that.lunbo = res.data.banner
  //     })

  //   },
  //   methods: {
  //     qijie(sthis) {
  //       console.log(sthis)
  //       if (sthis == 1) {
  //         //修改颜色
  //         this.activeColor = sthis
  //       } else if (sthis == 2) {
  //         //修改颜色
  //         this.activeColor = sthis
  //       }
  //     }
  //   }
  // }
</script>

<style>
</style>

<template>
    <div class="forscroll">
      <!-- 为了获取scrolltop -->
      <!-- 引入头部 -->
      <routeBack></routeBack>
      <div class="big" ref="mainlist" v-cloak>
        <!-- <div class="dingni"></div> -->
        <div class="gendaxiao" v-on:click="nowpoint($event)"></div>
        <div class="zimu" ref="tlength">
          <div class="zmi" v-for="item in citylist">{{item.name}}</div>
        </div>
        <div class="tww">
          <div class="twai" v-for="(item,index) in citylist">
            <div class="title">
              {{item.name}}
            </div>
            <div class="tcon" v-bind:class="{addclass:index==0}">
              <div class="cities" v-for="(item,index1) in item.cities" v-bind:class="{addcities:index==0&&index1==index1,addcheckcolor:index==0&&checked==index1}"
                v-on:click="(index==0)?checkthis(index1,item):checkthat(index1,item)">
                <img src="static/image/dingwei_red.png" alt="" v-show="index==0&&checked==index1">
                {{item.name}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
  import routeBack from './routeBack'
  export default{
      components:{
         'routeBack':routeBack
      },
      data() {
        return {
          checked: '',
          citylist: []
        }
      },
      created(){
         this.$axios.get('static/json/cityList.json').then((res)=>{
           console.log(res.data)
           this.citylist=res.data
         })
      },
      methods: {
        nowpoint: function(thise) {
          // console.log(thise)
          // console.log("这是右边顶部的高度:"+thise.offsetY)
          // console.log("这是右边边的固定高度:"+this.$refs.tlength.offsetHeight)
          // console.log("这是对比的数:"+thise.offsetY/this.$refs.tlength.offsetHeight)
          // console.log("这是左边的整体高度:"+this.$refs.mainlist.scrollHeight)
          // console.log("这是左边距离上面高度:"+thise.offsetY/this.$refs.tlength.offsetHeight*this.$refs.mainlist.scrollHeight)
          // console.log(this.$refs.mainlist.scrollTop)
          this.$refs.mainlist.scrollTop = thise.offsetY / this.$refs.tlength.offsetHeight * this.$refs.mainlist
            .scrollHeight - 300
        },
        checkthis: function(index1, item) {
          console.log(item.cityid)
          console.log(item.name)
          console.log(item.tags)
          this.checked = index1
        },
        checkthat: function(index1, item) {
          console.log(item.cityid)
          console.log(item.name)
          console.log(item.tags)
        }
      }
}
</script>

<style scoped>
  .forscroll {
    height: 692.3076px;
    width: 100%;
    overflow-y: auto;
  }

  .forscroll .big {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  }

  .forscroll .big .zimu {
    width: 30px;
    height: 500px;
    position: fixed;
    right: 0;
    bottom: 0;
    z-index: 5;
    color: #ffbd67;
  }

  /* 跟随的标签 */
  .forscroll .big .gendaxiao {
    width: 30px;
    height: 500px;
    position: fixed;
    right: 0;
    bottom: 0;
    z-index: 10;
    opacity: 0.1;
  }

  /* 1/23   56.52173913043478*/
  .forscroll .big .zimu .zmi {
    height: 21.73913043478261px;
    line-height: 21.73913043478261px;
    font-size: 15.3846px;
    text-align: center;
  }

  .forscroll .big .tww {
    border-top: 20px solid #f2f2f2;
  }

  .forscroll .big .title {
    width: 94%;
    height: 40px;
    line-height: 40px;
    margin: 0 3%;
    font-size: 20px;
    background: #E6E7E7;
  }

  .forscroll .big .cities {
    height: 36px;
    font-size: 14px;
    line-height: 36px;
    border-bottom: 1px solid #d2d2d2;
    padding: 0 3%;
  }

  .forscroll .big .addcities {
    width: 19%;
    height: 24px;
    line-height: 24px;
    margin: 0 3%;
    margin-bottom: 20px;
    font-size: 14px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .forscroll .big .addcities img {
    width: 12px;
    height: 14px;
    margin-right: 5px;
  }

  /* 添加标签 */
  .addclass {
    display: flex;
    flex-wrap: wrap;
    border-bottom: 15px solid #f2f2f2;
    color: red;
    text-align: center;
  }

  .addcities {
    background: #d2d2d2;
    color: #999999;
  }

  .addcitychecked {
    color: #fff;
  }

  .addcheckcolor {
    background: #ffbd67;
    color: #fff;
  }
</style>

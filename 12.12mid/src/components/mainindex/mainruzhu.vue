<template>
  <div class="big">
  		<!-- 第一栏 -->
  		<div class="ruzhu">
  			<div class="rztop">
  				入住申请
  			</div>
  			<div class="rzlist">
  				<div class="rzlitem">身份类型：</div>
  				<input type="text" placeholder="请选择" v-model="shenfentype" v-on:click="shenfencheck">
  			</div>
  			<div class="rzlist">
  				<div class="rzlitem">企业/驾校名称：</div>
  				<input type="text" placeholder="请输入企业/驾校名称" v-model="qiyename">
  			</div>
  		</div>
  		<!-- 第一栏 -->
  		<!-- 第二栏 -->
  		<div class="sec">
  			<div class="seclist" v-show="shenfennumber==5">
  				<div class="seclitem">学费：</div>
  				<input type="text" placeholder="请输入学费" v-model="xuefei">
  			</div>
  			<div class="seclist">
  				<div class="seclitem">关键词：</div>
  				<input type="text" placeholder="请输入关键词" v-model="guanjianci">
  			</div>
  			<div class="seclist">
  				<div class="seclitem">详细地址：</div>
  				<input type="text" placeholder="获取位置信息" v-model="xiangxidizhi" readonly="readonly">
  				<div class="dituicon" v-on:click="showmap"></div>
  			</div>
  		</div>
  		<!-- 第二栏 -->
  		<!-- 第三栏 -->
  		<div class="thr">
  			<div class="thrlist">
  				<div class="thrlitem">上班开始时间：</div>
  				<input type="text" placeholder="00:00" v-model="shangbantime" v-on:click="starttime">
  			</div>
  			<div class="thrlist">
  				<div class="thrlitem">上班结束时间：</div>
  				<input type="text" placeholder="00:00" v-model="xiabantime" v-on:click="overtime">
  			</div>
  			<div class="thrlist">
  				<div class="thrlitem">座机：</div>
  				<input type="text" placeholder="区号" v-model="quhao">
  				<div class="thra">--</div>
  				<input type="text" placeholder="座机号" v-model="tel">
  			</div>
  			<div class="thrlist">
  				<div class="thrlitem">联系电话：</div>
  				<input type="text" placeholder="请输入您的手机号" v-model="mobphone">
  			</div>
  			<div class="thrlist">
  				<div class="thrlitem">驾校/企业公告：</div>
  				<input type="text" placeholder="请输入驾校/企业公告" v-model="gonggao">
  			</div>
  		</div>
  		<!-- 第三栏 -->
  		<!-- 第四栏 -->
  		<div class="four">
  			<div class="fourlist">
  				<div class="flt" v-on:click="logoshangchuan">
  					<img v-bind:src="logoImg" alt="">
  				</div>
  				<div class="flb">logo</div>
  			</div>
  			<div class="fourlist">
  				<div class="flt" v-on:click="zhizhaoshangchuan">
  					<img v-bind:src="zhizhaoImg" alt="">
  				</div>
  				<div class="flb">营业执照</div>
  			</div>
  		</div>
  		<!-- 第四栏 -->
  		<!-- 第五栏 -->
  		<div class="five">
  			<div class="ft">
  				企业驾校轮播图（640*370）
  			</div>
  			<div class="fb">
  				<div class="fbpailie">
  					<div class="fbpic" v-for="(item,index) in lunboImg">
  						<img :src="item" alt="">
  						<div class="fbpicdel" v-on:click="dellunbo(index)"></div>
  					</div>
  					<div class="fbpicadd" v-show="lunboImg.length<3" v-on:click="lunboshangchuan"></div>
  				</div>
  			</div>
  		</div>
  		<!-- 第五栏 -->
  		<!-- 第六栏 -->
  		<div class="six">
  			<div class="sixtop">
  				<div class="stt">企业/驾校介绍</div>
  				<div class="stb">
  					<textarea name="" id="" cols="30" rows="10" v-model="jieshao"></textarea>
  				</div>
  			</div>
  			<div class="sixbtm">
  				<div class="sbt">企业/驾校详细图（640*370）</div>
  				<div class="sbb">
  					<div class="sbbpic" v-for="(item,index) in xiangqingImg">
  						<img :src="item" alt="">
  						<div class="fbpicdel" v-on:click="delxiangqing(index)"></div>
  					</div>
  					<div class="fbpicadd" v-show="xiangqingImg.length<9" v-on:click="xiangqingshangchuan"></div>
  				</div>
  			</div>
  		</div>
  		<!-- 第六栏 -->
  		<!-- 底部 -->
  		<div class="footer">
  			<div class="footertop">
  				<div class="okicon" v-on:click="tongyi" v-bind:class="{addclass:activeColor}"></div>
  				<div>我已阅读并同意《企业/驾校入住须知》</div>
  			</div>
  			<div class="footerbtm">
  				<div class="tijiao" v-on:click="lijiruzhu">立即入住</div>
  			</div>
  		</div>
  	</div>
</template>

<script>
  export default{
    data() {
    					return {
    						activeColor: true, //我已同意的选项框颜色 且 控制立即入驻按钮的点击事件
    						logoImg: '', //logo图片
    						lunboImg: [], //轮播图片
    						zhizhaoImg: [], //执照图片
    						xiangqingImg: [], //详细图片
    						//lunboaddcontrol:true, //轮播add图标控制
    						shenfentype: '', //身份类型
    						shenfennumber:'', //身份类型number
    						qiyename: '', //企业名称
    						guanjianci: '', //关键词
    						xiangxidizhi: '', //详细地址
    						shangbantime: '', //上班时间
    						xiabantime: '', //下班时间
    						tel: '', //电话
    						quhao:'', //区号
    						mobphone: '', //手机
    						gonggao: '', //公告
    						jieshao: '', //介绍
                xuefei:'',    //学费
    						lon:'',      //精度
    						lat:''       //维度
    					}
    				},
    				mounted() {
    					//获取定位
    				},
    				methods: {
    					alinp: function() {

    					},
    					tongyi: function() {
    						console.log('改变颜色')
    						this.activeColor = !this.activeColor
    					},
    					shenfencheck:function(){
    					},
    					starttime:function(){
    					},
    					overtime:function(){
    					},
    					showmap: function() {
    						//获取定位
    					},
    					logoshangchuan: function() {
    						//获取token
    						//这是多图片上传
    					},
    					//轮播图上传
    					lunboshangchuan: function() {
    						//获取token
    						//这是多图片上传
    					},
    					//轮播删除
    					dellunbo: function(tindex) {
    						console.log(tindex)
    						this.lunboImg.splice(tindex, 1)
    						this.lunboImg = this.lunboImg
    					},
    					//执照上传
    					zhizhaoshangchuan: function() {

    					},
    					//删除详细图
    					delxiangqing: function(tindex) {
    						console.log(tindex)
    						this.xiangqingImg.splice(tindex, 1)
    						this.xiangqingImg = this.xiangqingImg
    					},
    					//详细上传
    					xiangqingshangchuan: function() {
    						//获取token
    						//这是多图片上传
    					},
    					lijiruzhu: function() {
    						console.log('这是立即入住按钮')
    						if (this.activeColor == false) {
    								alert('请同意入住须知')
    						} else {
    							console.log(this.logoImg) //logo图片
    							console.log(this.lunboImg) //轮播图片
    							console.log(this.zhizhaoImg) //执照图片
    							console.log(this.xiangqingImg) //详细图片
    							console.log(this.shenfentype) //身份类型
    							console.log(this.shenfennumber) //身份类型数值
    							console.log(this.qiyename) //企业名称
    							console.log(this.guanjianci) //关键词
    							console.log(this.xiangxidizhi) //详细地址
    							console.log(this.shangbantime) //上班时间
    							console.log(this.xiabantime) //下班时间
    							console.log(this.tel) //电话
    							console.log(this.quhao) //区号
    							console.log(this.mobphone) //手机
    							console.log(this.gonggao) //公告
    							console.log(this.jieshao) //介绍
                  console.log(this.xuefei)  //学费

    						}
    					}
    				}
  }
</script>

<style scoped>
  @import '../../assets/css/mainruzhu.css';
</style>

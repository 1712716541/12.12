<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="maximum-scale=1.0,minimum-scale=1.0,user-scalable=0,width=device-width,initial-scale=1.0"/>
    <meta name="format-detection" content="telephone=no,email=no,date=no,address=no">
    <title>开发</title>
    <link rel="stylesheet" type="text/css" href="../../../css/api.css"/>
    <link rel="stylesheet" type="text/css" href="../../../css/style.css"/>
    <link rel="stylesheet" type="text/css" href="../../../css/my/my.css"/>
    <link rel="stylesheet" href="../../../css/swiper.min.css">
    <style>
          input::-webkit-input-placeholder { /* WebKit browsers */
            color: white;
          }
          input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
            color: white;
          }
          input::-moz-placeholder { /* Mozilla Firefox 19+ */
            color: white;
          }
          input:-ms-input-placeholder { /* Internet Explorer 10+ */
            color: white;
          }
          *{outline:none;}
          #box{width:100%;height:800px;background:url('../../../image/loginbackground.png') no-repeat;background-size: cover;overflow: hidden;}
          #box .tabbar{height:70px;width: 100%;margin-top: 45px;font-size: 16px;color: #fff;margin-left: 10px;
            background:url('../../../image/loginjiao.png') no-repeat;background-size:16px;text-indent: 2rem;background-position:0 3px;
          position: fixed;top: 0;left: 0;}
          #box .logininfo{width: 70%;height:300px;margin:200px auto;}

          #box .logininfo .zhanghao{width: 100%;height: 40px;border: 1px solid #fff;border-radius:5px;margin-top: 20px;color: #fff;
          display:flex;}
          #box .logininfo .zhanghao input{height: 40px;font-size: 16px;color:#fff;width:180px;margin: 0 10px;}
          #box .logininfo .yanzheng{width: 100%;height: 40px;margin-top: 20px;color: #fff;display:flex;}
          #box .logininfo .yanzheng .yzl{width:60%;height:40px;border: 1px solid #fff;border-radius:5px;}
          #box .logininfo .yanzheng .yzl input{height: 40px;font-size: 16px;color:#fff;width:180px;margin: 0 10px;}
          #box .logininfo .yanzheng .yzr{width:35%;height:40px;border-radius:5px;background:#73A065;border:1px solid #73A065;
            margin-left: 5%;line-height: 40px;text-align: center;}
          #box .logininfo .mima{width: 100%;height: 40px;border: 1px solid #fff;border-radius:5px;margin-top: 20px;color: #fff;}
          #box .logininfo .mima input{height: 40px;font-size: 16px;color:#fff;margin: 0 10px;}
          #box .logininfo .againmima{width: 100%;height: 40px;border: 1px solid #fff;border-radius:5px;margin-top: 20px;color: #fff;}
          #box .logininfo .againmima input{height: 40px;font-size: 16px;color:#fff;margin: 0 10px;}
          #box .logininfo button{width: 100%;height: 40px;border-radius:5px;margin-top: 40px;background: #73a065;color: #fff;}
    </style>
</head>
<body>
    <div id="box">
      <div class="tabbar" v-on:click="fanhui">
         忘记密码
      </div>
      <div class="header">
             <div class="logininfo">
                   <div class="zhanghao"><input type="tel" placeholder="153xxxx3346" v-model="zhanghao"></div>
                   <div class="yanzheng">
                     <div class="yzl"><input type="number" placeholder="请输入验证码" v-model="yanzheng"></div>
                     <div class="yzr" v-on:click="getyanzheng">获取验证码</div>
                   </div>
                   <div class="mima"><input type="text" placeholder="密码  |  8-12位数字字母结合" v-model="mima"></div>
                   <div class="againmima"><input type="text" placeholder="再次输入密码" v-model="mima2"></div>
                  <button class="denglu" v-on:click="xiugai">提交</button>
             </div>
      </div>
    </div>
    <script src="../../../script/api.js"></script>
    <script src="../../../css/my/vue.min.js"></script>
    <script>
        var vm;
        apiready = function(){
          vm=new Vue({
                 el:'#box',
                 data:function(){
                    return {
                      zhanghao:'',
                      yanzheng:'',
                      mima:'',
                      mima2:''
                    }
                 },
                 created(){
                   console.log('这是钩子函数')
                 },
                 methods:{
                   fanhui:function(){
                     api.openWin({
                         name: 'loginlogin',
                         url: './login.html',
                         pageParam: {
                             name: 'test'
                         }
                     });
                   },
                   getyanzheng:function(){
                      console.log(1)
                      var phone=this.zhanghao
                      api.ajax({
                          url: 'https://minipro.sazjob.com/appapi/yGetPassword',
                          method: 'post',
                          // headers: {
                          //     'Content-Type': 'application/json;charset=utf-8'
                          // },
                          data: {
                              values: {
                                  phone:phone
                              }
                          }
                      }, function(ret, err) {
                          if (ret) {
                              api.alert({ msg: JSON.stringify(ret) });
                          } else {
                              api.alert({ msg: JSON.stringify(err) });
                          }
                      });
                   },
                   xiugai:function(){
                       console.log(this.zhanghao)
                       console.log(this.yanzheng)
                       console.log(this.mima)
                       console.log(this.mima2)
                       if(!(this.zhanghao&&this.yanzheng&&this.mima&&this.mima2)){ //每个必填
                         alert('每项必填')
                       }
                       else if(!/^1[3456789]\d{9}$/.test(this.zhanghao)){ //如果不是手机号
                          alert('不是手机号')
                       }
                       else if(this.mima!==this.mima2){
                         alert('两次密码不一致')
                       }
                       else{
                         alert('数据填写正确')
                         var username=this.zhanghao
                         var code=this.yanzheng
                         var password=this.mima
                         api.ajax({
                             url: 'https://minipro.sazjob.com/appapi/yChangPassword',
                             method: 'post',
                             data: {
                                 values: {
                                     phone:username,
                                     code:code,
                                     password:password
                                 }
                             }
                         }, function(ret, err) {
                             if(ret.code==0){
                               alert(ret.msg)
                             }
                             else if (ret.code==211) {
                                 alert(ret.msg+",密码不能为原密码");
                             } else if(ret.code==111){
                                alert(ret.msg);
                                api.openWinFrame({
                                    name: '',
                                    url: './login.html'
                                });

                             }
                         });
                       }
                    },
                    fanhui:function(){
                      api.openWin({
                          name: 'loginlogin',
                          url: './login.html',
                          pageParam: {
                              name: 'test'
                          }
                         });
                      }
                 }
            })

        }
    </script>
</body>
</html>

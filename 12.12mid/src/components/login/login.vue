<template>
  <div id="box">
    <div class="header">
      <div class="logininfo">
        <div class="zhanghao"><input type="tel" placeholder="153xxxx3346" v-model="zhanghao"></div>
        <div class="mima">
          <input type="password" placeholder="登录密码" v-show="showmima" v-model="mima">
          <input type="text" placeholder="登录密码" v-show="!showmima" v-model="mima">
          <div class="showpsd" v-on:click="changeeyes" v-bind:class="{changeeyes:showmima}"></div>
        </div>
        <button class="denglu" v-on:click="denglu">登录</button>
        <div class="forgetitem">
          <div class="ftao">
            <div class="zhuce" v-on:click="zhuce">立即注册</div>
            <div>|</div>
            <div class="forget" v-on:click="forget">忘记密码</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        showmima: true, //展示眼睛的开关
        zhanghao: '15222272463',
        mima: '123456',
      }
    },
    created() {
    },
    methods: {
      changeeyes: function() {
        this.showmima = !this.showmima
        console.log(this.showmima)
      },
      zhuce: function() {

      },
      forget: function() {

      },
      denglu: function() {
        console.log(this.zhanghao)
        console.log(this.mima)
        var username = this.zhanghao
        var password = this.mima

        this.$axios.post('/api/appapi/pwdLogin',{
              username: username,
              password: password
            }).then((res)=>{
                console.log(res)
                if (res.data.code == 0) {
                  //获取到token
                  //alert(ret.data.token)
                  alert(res.data.msg)
                } else if (res.data.code == 1) {
                  //存到全局 token and tel
                  alert('登录成功，等待存入全局')
                  }
            })

      }
    },
    watch: {
      mima: function() {
        //在显示非password 输入框情况下的密码   验证密码只能输入数字和字母
        this.mima = this.mima.replace(/[\W]/g, '');
      }
    }

  }
</script>
<style scoped="scoped">
  input::-webkit-input-placeholder {
    /* WebKit browsers */
    color: white;
  }

  input:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: white;
  }

  input::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: white;
  }

  input:-ms-input-placeholder {
    /* Internet Explorer 10+ */
    color: white;
  }

  #box {
    outline: none;
    width: 100%;
    height: 100%;
    background: url('../../../static/image/loginbackground.png') no-repeat;
    background-size: cover;
    overflow: hidden;
  }

  #box .logininfo {
    width: 70%;
    height: 300px;
    margin: 200px auto;
  }

  #box .logininfo .zhanghao {
    width: 100%;
    height: 40px;
    border: 1px solid #fff;
    border-radius: 5px;
    margin-top: 20px;
    color: #fff;
    display: flex;
  }

  #box .logininfo .zhanghao input {
    height: 40px;
    font-size: 16px;
    color: #cdd6d0;
    width: 180px;
    margin: 0 10px;
    outline: none;
    border: none;
    background: transparent;
  }

  #box .logininfo .mima {
    width: 100%;
    height: 40px;
    border: 1px solid #fff;
    border-radius: 5px;
    margin-top: 20px;
    color: #fff;
    display: flex;
  }

  #box .logininfo .mima input {
    height: 40px;
    font-size: 16px;
    color: #cdd6d0;
    margin: 0 10px;
    display: block;
    width: 180px;
    outline: none;
    border: none;
    background: transparent;
  }

  #box .logininfo .mima .showpsd {
    width: 50px;
    height: 40px;
    background: red;
    background: url('../../../static/image/biyan.png') no-repeat center center;
    background-size: 15px;
  }

  #box .logininfo .mima .changeeyes {
    width: 50px;
    height: 40px;
    background: red;
    background: url('../../../static/image/zhengyan.png') no-repeat center center;
    background-size: 15px;
  }

  #box .logininfo button {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    margin-top: 40px;
    background: #73a065;
    color: #fff;
    outline: none;
    border: none;
  }

  #box .logininfo .forgetitem {
    display: flex;
    font-size: 10px;
    color: #fff;
    justify-content: center;
  }

  #box .logininfo .forgetitem .ftao {
    display: flex;
    margin-top: 20px;
  }

  #box .logininfo .forgetitem .ftao .zhuce {
    margin-right: 20px;
  }

  #box .logininfo .forgetitem .ftao .forget {
    margin-left: 20px;
  }
</style>

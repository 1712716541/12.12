<template>
  <div class="box">
    <div class="smbitem">
      <div class="smbileft">
        <img src="" alt="">
      </div>
      <div class="smbicenter">
        <div class="smbictop">
            转载浙江德邦物流有限公司
        </div>
        <div class="smbicbtm">
            浙江省金华市永康市柏青中路 218号
        </div>
      </div>
      <div class="smbiright">
          1141.00km
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped="scoped" lang="less">
	.box{
	    background: #E6E7E7;
	   .smbitem{
	     display: flex;
	     box-sizing: border-box;
	     padding: 10px;
	     margin-bottom: 3px;
	     background: #ffffff;
	     .smbileft{
	         width: 150px;
	         height: 90px;
	         border: 1px solid #000;
	         margin-right: 20px;
	         img{
	            width: 100%;
	            height: 100%;
	         }
	     }
	     .smbicenter{
	       flex: 1;
	     }
	     .smbiright{
	       width: 60px;
	       overflow: hidden;
	       background: green;
	     }
	   }
	}
</style>

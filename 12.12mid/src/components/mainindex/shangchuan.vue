<template>
  <div>
    这是mainwode页面
    <input type="file" multiple="multiple" @change="toupimg" style="width: 100px;height: 100px;background: red;">
    <img v-for="(item,index) in thisimg" :src="item" alt="" style="width: 300px;height: 300px;">
  </div>
</template>

<script>
  export default{
    data(){
      return{
         thisimg:''
      }
    },
    methods:{
      toupimg:function(){
        console.log(event.target.files.length)
        // this.thisimg=event.target.files[0].name
                // this.thisimg=
                 console.log(event.target.files)
                var imgCache=[]
                for(var i=0;i<event.target.files.length;i++){
                    imgCache.push(this.getObjectURL(event.target.files[i]));
                }
                console.log(imgCache)
                this.thisimg=imgCache
      },
      getObjectURL:function(file){
           var url = null;
           if (window.createObjcectURL != undefined) {
               url = window.createOjcectURL(file);
           } else if (window.URL != undefined) {
               url = window.URL.createObjectURL(file);
           } else if (window.webkitURL != undefined) {
               url = window.webkitURL.createObjectURL(file);
           }
           return url;
      }
    }
  }
</script>

<style>
</style>

<template>
<div class="con">

    <div class="">

     <div class="iconAdd">
       <el-upload
         action="https://jsonplaceholder.typicode.com/posts/"
         list-type="picture-card"
         :on-preview="handlePictureCardPreview"
         :on-remove="handleRemove">
         <i class="el-icon-plus"></i>
       </el-upload>
<!--       <i class="iconfont icon-jiahao" ></i>-->
     </div>
      <div class="conList">
          <div class="left">
            <div class="listImg">
            </div>
            <div class="listCon">
              <textarea maxlength="250" placeholder="点击输入内容"></textarea>
            </div>
          </div>
          <div class="listIcon">
            <i class="iconfont icon-Group-"></i>
          </div>
      </div>
    </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }
  }
</script>

<style scoped>

  .iconAdd .iconfont{
    font-size: 3rem;
    color:cornflowerblue;
  }
.conList{
  width: 100%;
  height: auto;
  border: 1px solid  gray;
  box-sizing: border-box;
  display: flex;
  overflow: hidden;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
}
  .left{
    width: 100%;
    height: 100%;
  }
.left>div{
  float: left;
}
  .listImg{
    width:20%;
    height: 10rem;
    overflow:hidden;
    position: relative;

  }
  .listImg input{
    width: 100%;
    height: 100%;

  }
  .listImg .iconfont{
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.2rem;
  }
.listImg img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.listCon{
  width:77%;
  height: 100%;
}
.listCon textarea{
    resize: none;
    width: 100%;
    height: 100%;
  min-height: 9.6rem;
  }
  .listIcon i{

    top: 0;
    right: 0;
    font-size: 2rem;
  }
</style>

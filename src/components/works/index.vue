<template>
<div class="con">
  <headerName></headerName>
    <div class="">
      这是我的主页面
     <div class="iconAdd">
       <el-upload
         class="avatar-uploader"
         action="https://jsonplaceholder.typicode.com/posts/"
         :show-file-list="false"
         :on-success="handleAvatarSuccess"
         :before-upload="beforeAvatarUpload">
         <img v-if="imageUrl" :src="imageUrl" class="avatar">
       </el-upload>
       <i class="iconfont icon-jiahao" ></i>
     </div>
      <div class="conList">
          <div class="left">
            <div class="listImg">
              <el-upload
                :auto-upload="false" multiple
                list-type="picture-card"

                :on-remove="imgBroadcastRemove"
                accept="image/jpg,image/png,image/jpeg"
                action=""
                :show-file-list="true">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">

              </el-upload>

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
      name: 'worksIndex',
      data(){
        return{
          imageUrl:'',
          diaLogForm: {
            goodsName:'', // 商品名称字段
            imgBroadcastList:[], // 储存选中的图片列表
            imgsStr:''   // 后端需要的多张图base64字符串 , 分割
          }
        }
      },
      methods:{
        click(){
          const that = this
          that.$refs.img.dispatchEvent(new MouseEvent('click'))
        },
        // 图片选择后 保存在 diaLogForm.imgBroadcastList 对象中
        handleAvatarSuccess(res, file) {
          this.imageUrl = URL.createObjectURL(file.raw);
        },
        imgBroadcastRemove (file, fileList) {
          this.diaLogForm.imgBroadcastList = fileList
          console.log('这是内容一');
          console.log(fileList);
        },


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

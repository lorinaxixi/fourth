<template>
<div class="con" ref="parentNode">
  <div class="haha">这是在测试时间戳：{{time}}</div>
    <div class="" v-for="(item,index) in listImg" :key="index" >
      <div class="iconAdd">
        <el-upload style="width: 50px;height: 50px;border:1px solid white;box-sizing:border-box;overflow: hidden;margin: auto ;position: relative"
          :show-file-list="false"
          class="avatar-uploader"
          action="/api/file/dalaba/file/upload.json"
          :on-remove="handleRemove"
          :on-preview="handlePictureCardPreview"
          list-type="picture-card"
          :on-success="(res,file) => handleAvatarSuccessAdd(res,file,index)">
          <i class="iconfont icon-jiahao" style='margin: auto;position: absolute;top: -50px;left: 0;'></i>
        </el-upload>
      </div>
      <div class="" v-if="item.data">
        <div class="conList">
        <div class="left">
          <div class="listImg">
            <el-upload
              :show-file-list="false"
              class="avatar-uploader"
              action="/api/file/dalaba/file/upload.json"
              :on-remove="handleRemove"
              :on-preview="handlePictureCardPreview"
              list-type="picture-card"
              :on-success="(res,file) => handleAvatarSuccess(res,file,index)">
              <img  v-if = "item.data.picUrl" width="100%" :src="item.data.picUrl" >
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
<!--              添加过度时间，放大效果-->
            <el-dialog :visible.sync="dialogVisible" size="tiny">
              <img width="100%" :src="item.data.picUrl" alt="">
            </el-dialog>
          </div>
          <div class="listCon" >
            <textarea maxlength="200" @input="descInput()" v-model="item.data.desc"/>
            <span>{{item.data.remnant}}/200</span>
          </div>
        </div>
        <div class="listIcon">
          <i class="iconfont icon-Group-" @click="close(index)"></i>
          <i class="iconfont icon-menu-line" @click="remove(index)" style="cursor: pointer"></i>
        </div>
      </div>

      </div>
    </div>

</div>
</template>

<script>
  import moment from 'moment'
    export default {
      name: 'worksIndex',
      data(){
        return{
          time:null,
          dialogVisible:false,
          listImg:[
            { id:'0', data: {desc:'0dwccv',remnant:'200',pic:'',picUrl:''} },
            { id:'1', data: {desc:'1wdw',remnant:'200',pic:'',picUrl:''} },
            { id:'2', data: {desc:'2dw',remnant:'200',pic:'',picUrl:''} },
            { id:'3', data: null },
          ],
          number:'100',
        }
      },
      created(){
        this.descInput()
        this.showTime()
      },
      mounted:function(){

      },
      watch:{

      },
      methods:{
        showTime(){
          const timestamp = '1425553097';
          const d = new Date(timestamp * 1000);    //根据时间戳生成的时间对象
          const date = (d.getFullYear()) + "-" +
            (d.getMonth() + 1) + "-" +
            (d.getDate()) + " " +
            // (d.getHours()) + ":" +
            // (d.getMinutes()) + ":" +
            // (d.getSeconds());
          console.log(date)
        },
        //删除列表
        close(index){
          console.log('删除列')
          this.listImg.splice(index,1)
        },
        // 增加列表
        add(index){
          const that = this
          console.log(index)
          const listLI =  { id:'0', data: {desc:'5555555555',remnant:'200',pic:'',picUrl:''} }
          that.listImg.splice(index ,0 , listLI);
          this.descInput()
        },
        descInput(){
          console.log('fenbei',this.listImg.length)
          this.listImg.forEach((data) => {
            if(data.data != null){
              const txtVal = data.data.desc.length
              data.data.remnant = 200 - txtVal
              return;
            }else {
              return
            }


          })
          return this.listImg
        },

        //移除的时候
        handleRemove(file, fileList) {
          console.log(file, fileList);
        },
        //返回拿到后端的数据路径
        handlePictureCardPreview(file,fileList) {
          this.dialogVisible = true;
          console.log('拿去后端的数据连接',file,fileList)
        },
        preview(event){
          console.log(event.target.files)
        },
        // 图片选择后 保存在 diaLogForm.imgBroadcastList 对象中
        handleAvatarSuccess(res, file,index) {
          debugger
          this.listImg[index].data.picUrl = res.fullname
          this.listImg[index].data.pic = res.uri

        },
        handleAvatarSuccessAdd(res, file,index) {
          this.add(index)
          this.listImg[index].data.picUrl = res.fullname
          this.listImg[index].data.pic = res.uri
        },
      }
    }
</script>

<style scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
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

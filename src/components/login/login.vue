<template>
  <div class="login" >
      <div class="loginCenter">
        <div class="title">登录</div>
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2"  class="demo-ruleForm">
          <el-form-item  prop="age">
            <el-input v-model.number="ruleForm2.age" placeholder="请输入手机号"></el-input>
          </el-form-item>
          <el-form-item  prop="pass">
            <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item  prop="checkPass">
            <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="请再次输入密码"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>
<script>
  export default {
    name:'login',
    data() {
      const checkPhone = (rule, value, callback) => {
        const mobile = /^((13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})|(19[0-9]{9}))$/
        const tel = /^\d{3,4}-\d{7,9}$/
        if (!mobile.test(value) && !tel.test(value)) {
          return callback(new Error('请输入正确的电话(座机格式 \'区号-座机号码\' )'))
        } else {
          callback()
        }
      }
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkPhone, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style>
  .login{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    background-image:url("../../assets/login/bg.jpg");
    background-size:cover;
    background-position: center;
    background-repeat:no-repeat ;
    display: flex;
  }
  .loginCenter{
    width: 500px;
    height: auto;
    background: white;
    margin: auto;
    padding: 1rem;
    box-sizing: border-box;
    border-radius:0.5rem ;
  }
  .title{
   margin: 1.5rem;

  }
</style>

import axios from "axios";
import qs from "qs";
const TIME_OUT = 3000
const token = '5aca542e-0243-4589-b505-ca5aa48def75'
export  async function giveUp(params) {
   return  axios({
     url: '/api/basic/open/thumbUp.json',
     method : 'post',
     headers: {
       'Content-Type': 'application/x-www-form-urlencoded',
       'Authorization':token
     },
     timeout : TIME_OUT,
     params
     //转换
     // transformToRequire:[function (data) {
     //   return qs.stringify(data)
     // }]
   })
}

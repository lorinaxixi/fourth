import headerName from '@/components/public/hearder.vue'
import footerrName from '@/components/public/footer.vue'
 const Lodding = {
	install:function(vue){
		 vue.component('headerName',headerName)
		 vue.component('footerrName',footerrName)
	}
 }
 export default Lodding
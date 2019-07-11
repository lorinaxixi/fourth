<template>
	<div class="viewer">
		<div class="item" v-show="show">控制显示影藏</div>
		<viewer >
			<img   :src='item' v-for="(item,index) in img" :key='index'/>
		</viewer>
		<div  @click="nana()">点击</div>
		<transition   name='fade'>						
			<div class="intergral" style="color:#333333;padding-left: 2rem;opacity: 0.8;" v-if="none" >						
				<div class="intergralTitle">
					<div class="titleName" >发布信息</div>
					<div class="">1.	发布采购信息       送100个积分</div>
					<div class="">2.	发布精准情报       送50个积分</div>
					<div class="">3.	发布项目信息       送70个积分</div>
					<div class="">4.	发布项目 合作信息  送20积分</div>
				</div>
				<!---->
				<div class="intergralTitle">
					<div class="titleName">商家入驻</div>
					<div class="">1.	家装供应商        送200积分</div>
					<div class="">2.	公装供应商        送200积分</div>
					<div class="">3.	业主、设计、施工  送500积分</div>
				</div>
			</div>
		</transition >
	</div>
</template>

<script>
	export default{
		data(){
			return{
				show:this.$store.state.show,
				none:true,
				img:[
					'../../../static/image/1.jpg',
					'../../../static/image/3.jpg',
					'../../../static/image/2.jpg',
				]
			}
		},
		methods: {
			nana() {
				this.none= !this.none
			}
		},
	}
</script>

<style>
.fade-enter,.fade-leave-to{
  opacity:0;
}
.fade-enter-active,.fade-leave-active{
  transition:opacity 1s;
}

</style>

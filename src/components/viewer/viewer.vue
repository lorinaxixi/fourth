<template>
	<div class="viewer">
		<div class="item" v-show="show">控制显示影藏</div>
		<viewer >
			<img   :src='item' v-for="(item,index) in img" :key='index'/>
		</viewer>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				show:this.$store.state.show,
				img:[
					'../../../static/image/1.jpg',
					'../../../static/image/3.jpg',
					'../../../static/image/2.jpg',
				]
			}
		}
	}
</script>

<style>
</style>

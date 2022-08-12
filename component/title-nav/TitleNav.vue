<template>
	<view class="title-nav">
		<view 
			class="nav-item" 
			v-for="(item,index) in texts" 
			@click="indexClick(index)"
			><text :class="index === currentIndex ? 'active' : ''">{{item}}</text></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				texts: ['全部', '限时秒杀'],
				currentIndex: 0
			}
		},
		methods: {
			indexClick(index) {
				this.currentIndex = index
				this.$emit('getIndex',index)
			}
		}
	}
</script>

<style lang="scss">
	.title-nav {
		display: flex;
		text-align: center;
		height: 80rpx;
		line-height: 80rpx;
		

		view {
			display: inline-block;
			flex: 1;
		}

		.active {
			display: inline-block;
			color: #e3524d;
			border-bottom: #e3524d solid 2px;
		}
	}
</style>

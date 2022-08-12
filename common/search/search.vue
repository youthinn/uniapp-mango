<template>
	<view class="search">
		<uni-section title="图标" subTitle="使用 prefixIcon / suffixIcon 属性 ,可以自定义输入框左右侧图标" type="line" padding>
			<uni-easyinput class="uni-mt-5" suffixIcon="search" v-model="value" placeholder="请输入你想搜索的内容"
				@iconClick="iconClick"></uni-easyinput>
		</uni-section>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				value: '',
				password: '',
				placeholderStyle: "color:#2979FF;font-size:14px",
				styles: {
					color: '#2979FF',
					borderColor: '#2979FF'
				}
			}

		},
		onLoad() {},
		onReady() {},
		methods: {
			input(e) {
				console.log('输入内容：', e);
			},
			iconClick(type) {
				uni.showToast({
					title: `点击了${type==='prefix'?'左侧':'右侧'}的图标`,
					icon: 'none'
				})
			}
		}
	}
</script>

<style lang="scss">
</style>

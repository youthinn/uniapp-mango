<template>
	<view class="container">
		<uni-section title="左侧文字+右侧文字" type="line" style="margin-bottom: 3px;">
			<view class="box-bg">
				<uni-nav-bar shadow left-icon="left" leftText="返回" rightText="设置" title="标题" />
			</view>
		</uni-section>
	</view>
</template>

<script>
	export default {
		
	}
</script>

<style lang="scss">
		.box-bg {
			background-color: #F5F5F5;
			padding: 5px 0;
		}
</style>
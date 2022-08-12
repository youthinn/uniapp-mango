<template>
	<view class="about">
		<view class="about-text" @click="goSell">
			<text>ABOUT US</text>
			<text>关于我们</text>
		</view>
		<view class="about-img">
			<image src="../../static/about/img1.png" @click="goAgency"></image>
			<image src="../../static/about/img2.png" mode=""></image>
			<image src="../../static/about/botton_img2.png" mode="" class="half"></image>
			<image src="../../static/about/botton_img4.png" class="half" @click="goSell"></image>
		</view>
		<view class="good-bye">
			芒果V品
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goAgency() {
				this.$emit('goAgency')
			},
			goSell() {
				
					console.log('售后服务')
				uni.navigateTo({
					url: '../../pages/home/child/AfterSale'
				})
				this.$emit('goSell')
			}
		}
	}
</script>

<style lang="scss">
	.about {
		.about-text {
			display: flex;
			justify-content: space-between;
			padding: 30rpx;

			text:first-child {
				color: #303133;
				font-weight: 600;
			}
		}

		.about-img {
			width: 96%;
			margin: auto auto;

			image {
				width: 100%;
				height: 160rpx;
			}

			.half {
				width: 49%;
			}

			image:nth-child(3) {
				margin-right: 2%;
			}
		}

		.good-bye {
			width: 96%;
			margin: auto auto;
			height: 80rpx;
			line-height: 80rpx;
			text-align: center;
			color: #fff;
			background-color: #7099a6;
		}
	}
</style>

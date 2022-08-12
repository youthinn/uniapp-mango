<template>
	<view class="home">
		<view class="hello">芒果V品 轻奢购物平台</view>
		<view class="search">
			<search />
		</view>
		<view class="navimg">
			<view class="navimg-item" v-for="item in imgs">
				<image :src="item" mode=""></image>
			</view>
		</view>
		<scroll-view scroll-y="true" class="home-scroll" @scroll="getPosition">
			<view>
				<swiper :indicator-dots="true" :autoplay="true" :interval="2000" :duration="1000" circular
					class="swiper">
					<swiper-item v-for="item in swipers" class="swiper-item">
						<image :src="item" mode=""></image>
					</swiper-item>
				</swiper>
			</view>
			<view class="classify">
				<view class="classify-item" v-for="item in classify">
					<image :src="item.icon" mode=""></image>
					<view>{{item.text}}</view>
				</view>
			</view>
			<view class="annunciate">
				<uni-section title="文字滚动" speed='' type="line">
					<uni-notice-bar show-icon scrollable text="芒果V品小程序1.0版本正式上线" />
				</uni-section>
			</view>
			<title-nav @getIndex="getIndex" />
			<view class="all" v-show="navIndex === 0">
				<goods-list />
				<goods-about  @goAgency="toAgency" />
			</view>
			<view class="time-limit" v-show="navIndex === 1">
				<view class="box1">
					<image src="../../static/vlogo.png" mode=""></image>
					<view>暂时没有商品</view>
					<view>我们正在为您准备更优惠的商品</view>
				</view>
			</view>

		</scroll-view>
	</view>
</template>

<script>
	import search from '@/common/search/search.vue'
	import TitleNav from '@/component/title-nav/TitleNav.vue'
	import GoodsList from '@/component/goods-list/GoodsList.vue'
	import GoodsAbout from '@/component/goods-about/GoodsAbout.vue'

	export default {
		components: {
			search,
			TitleNav,
			GoodsList,
			GoodsAbout,
		},
		data() {
			return {
				imgs: [
					'../../static/navimg/icon1_1.png',
					'../../static/navimg/icon1_2.png',
					'../../static/navimg/icon1_3.png',
					'../../static/navimg/icon1_4.png'
				],
				swipers: [
					'../../static/swiper/banner1.png',
					'../../static/swiper/banner2.png',
					'../../static/swiper/banner3.png'
				],
				classify: [{
						icon: '../../static/logo.png',
						text: '新人专享'
					},
					{
						icon: '../../static/logo.png',
						text: '积分当钱花'
					},
					{
						icon: '../../static/logo.png',
						text: '产品推广'
					},
					{
						icon: '../../static/logo.png',
						text: '供应商'
					},
					{
						icon: '../../static/logo.png',
						text: '每日打卡'
					},
					{
						icon: '../../static/logo.png',
						text: '区域代理'
					},
					{
						icon: '../../static/logo.png',
						text: '秒杀专区'
					},
					{
						icon: '../../static/logo.png',
						text: '砍价专区'
					}
				],
				navIndex: 0
			}
		},
		onLoad() {},
		methods: {
			getMore() {
				uni.showToast({
					title: '点击查看更多',
					icon: 'none'
				})
			},
			getIndex(index) {
				this.navIndex = index
			},
			getPosition() {
				console.log('滚动被触发了')
			},
			toAgency() {
				
				console.log('加入我们')
				uni.navigateTo({
					url: './child/JoinUs'
				})
			},
			toSell() {
				
					uni.navigateTo({
						url: './child/AfterSale'
					})
			}
		}
	}
</script>

<style lang="scss">
	.home {
		.hello {
			color: #af403b;
			font: 600 30rpx 微软雅黑;
			padding: 60rpx 10rpx 20rpx 10rpx;
		}

		.search {
			width: 90%;
			margin: 0 auto;
			border-radius: 40px;
		}

		.navimg {
			width: 100%;
			height: 60rpx;
			line-height: 60rpx;
			margin: 20px auto;
			display: flex;
			justify-content: center;
			margin: 10rpx auto;
			text-align: center;

			.navimg-item {
				flex: 1;
				height: 50rpx;

				image {
					width: 80%;
					height: 100%;
				}
			}
		}

		.home-scroll {
			width: 100%;
			height: 100%;

			.swiper {
				width: 750rpx;
				height: 520rpx;

				.swiper-item {

					width: 100%;
					height: 100%;

					image {

						width: 100%;
						height: 100%;
					}
				}
			}

			.classify {
				width: 100%;
				display: flex;
				flex-wrap: wrap;
				justify-content: flex-start; // 替代原先的space-between布局方式

				.classify-item {
					margin-top: 40rpx;
					flex: 1;
					text-align: center;
					width: calc(100% / 4); // 这里的10px = (分布个数3-1)*间隙5px, 可以根据实际的分布个数和间隙区调整
					min-width: calc(100% / 4); // 加入这两个后每个item的宽度就生效了
					max-width: calc(100% / 4); // 加入这两个后每个item的宽度就生效了

					image {
						width: 42%;
						height: 70rpx;
						// border-radius: 30rpx;
					}

					view {
						font-size: 26rpx;
					}
				}
			}

			.annunciate {
				margin: 40rpx 0;
			}

			.time-limit {
				width: 100%;

				.box1 {
					width: 80%;
					margin: 100rpx auto;
					margin-bottom: 600px;
					text-align: center;

					image {
						width: 220rpx;
						height: 220rpx;
					}

					view {
						line-height: 60rpx;
					}

					view:nth-child(3) {
						color: #ccc;
						font-size: 24rpx;
					}
				}
			}


		}
	}
</style>

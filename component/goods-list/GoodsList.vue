<template>
	<view class="goods-list">
		<view class="goods-item" v-for="item in listData">
			<image :src="item.img" mode=""></image>
			<view class="title">
				{{item.title}}
			</view>
			<view class="price">
				<text>￥{{item.price}}</text>
				<text>￥{{item.oldPrice}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				listData: [{
						img: '../../static/logo.png',
						title: '无接口文档无接口文档无接口文档',
						price: 998,
						oldPrice: 996,
						id: 557,
					},
					{
						img: '../../static/logo.png',
						title: '无接口文档无接口文档无接口文档',
						price: 998,
						oldPrice: 996,
						id: 557,
					},
					{
						img: '../../static/logo.png',
						title: '无接口文档无接口文档无接口文档',
						price: 998,
						oldPrice: 996,
						id: 557,
					},
					{
						img: '../../static/logo.png',
						title: '无接口文档无接口文档无接口文档',
						price: 998,
						oldPrice: 996,
						id: 557,
					},
					{
						img: '../../static/logo.png',
						title: '无接口文档无接口文档无接口文档',
						price: 998,
						oldPrice: 996,
						id: 557,
					},
					{
						img: '../../static/logo.png',
						title: '无接口文档无接口文档无接口文档',
						price: 998,
						oldPrice: 996,
						id: 557,
					},
					{
						img: '../../static/logo.png',
						title: '无接口文档无接口文档无接口文档',
						price: 998,
						oldPrice: 996,
						id: 557,
					},
					{
						img: '../../static/logo.png',
						title: '无接口文档无接口文档无接口文档',
						price: 998,
						oldPrice: 996,
						id: 557,
					},

				]
			}
		}
	}
</script>

<style lang="scss">
	.goods-list {
		margin-top: 20rpx;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		// background-color: #eee;

		.goods-item {
			width: calc((100% - 24px) / 2);
			margin: 12rpx;
			background-color: #fff;
			border-radius: 40rpx;
			padding: 10px;
			box-sizing: border-box;
			max-width: calc((100% - 24px) / 2);
			min-width: calc((100% - 24px) / 2);
			box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
			image {
				width: 100%;
				height: 400rpx;
			}

			.title {
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}

			view {
				padding: 8rpx;

				text {
					color: #ff5344;
					font-size: 38rpx;
				}

				text:nth-child(2) {
					color: #ccc;
					font-size: 28rpx;
					margin-left: 10rpx;
					text-decoration: line-through;
				}
			}
		}
	}
</style>

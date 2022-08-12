<template>
	<view class="join-us">
		<view class="container">
			<uni-section title="左侧文字+右侧文字" type="line" style="margin-bottom: 3px;">
				<view class="box-bg">
					<uni-nav-bar shadow left-icon="left" leftText="返回" rightText="设置" title="标题" />
				</view>
			</uni-section>
		</view>
		<view class="message">申请身份，需要您填写真实姓名、手机</view>
		<view class="info">
			<form action="">
				<table>
					<tr>
						<td>地址：</td>
						<td><input type="text" placeholder="请输入地址"></td>
					</tr>
					<tr>
						<td>联系人：</td>
						<td><input type="text" placeholder="请输入联系人"></td>
					</tr>
					<tr>
						<td>手机号：</td>
						<td><input type="text" placeholder="请输入手机号"></td>
					</tr>
					<tr>
						<td>代理：</td>
						<td><input type="text" placeholder="请输入名称"></td>
					</tr>
				</table>
				<input type="submit" value="提交申请" class="submit">
			</form>
		</view>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {

			}
		},

	}
</script>

<style lang="scss">
	.box-bg {
		background-color: #F5F5F5;
		padding: 5px 0;
	}

	.message {
		width: 100%;
		height: 200rpx;
		line-height: 200rpx;
		background-color: #f75451;
		text-align: center;
		color: #fff;
	}

	.info {
		width: 730rpx;
		padding: 30rpx;

		table {
			tr {
				height: 100rpx;
				line-height: 100rpx;
				border-bottom: #efefef solid 1px;
				width: 95%;
				display: inline-block;

				td:nth-child(1) {
					width: 100px;
					height: 40px;
					line-height: 40px;
					text-align: justify;
					text-align-last: justify;
				}
				
				td:nth-child(2) {
					width: 70%;
				}
			}
		}
		
		.submit {
			margin: 40rpx auto;
			width: 400rpx;
			height: 100rpx;
			line-height: 100rpx;
			text-align: center;
			background-color: #f75451;
			color: #fff;
			border-radius: 60rpx;
		}
	}
</style>

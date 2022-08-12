// const baseUrl = 'https://a2.gqhulian.com/wxapp.php'
const baseUrl = 'https://api-hmugo-web.itheima.net'

export const testApi = options => {
	return new Promise((resolve,rejects) => {
		uni.request({
			url: baseUrl + options.url,
			success: res => resolve(res),
			fail: err => reject(err)
		})
	})
}
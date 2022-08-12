// const baseUrl = 'https://a2.gqhulian.com/wxapp.php'
const baseUrl = 'https://api-hmugo-web.itheima.net'

export const myRequest = options => {
	return new Promise((resolve,rejects) => {
		uni.request({
			url: baseUrl + options.url,
			method: options.method || 'GET',
			data: options.data || {},
			header: options.header || {},
			dataType: options.dataType || 'json',
			success: res => resolve(res),
			fail: err => reject(err)
		})
	})
}
import { Config } from '../config/config';

export function alipayPass(config: Config) {
	config.route.rules.push({
		domain_suffix: [
			'.alipay-corp.com',
			'.alipay-eco.com',
			'.alipay-inc.com',
			'.alipay-traffic.com',
			'.alipay.cn',
			'.alipay.com',
			'.alipay.com.cn',
			'.alipay.hk',
			'.alipay.net',
			'.alipaydesign.com',
			'.alipaydev.com',
			'.alipaydns.com',
			'.alipayeshop.com',
			'.alipaylog.com',
			'.alipaymo.com',
			'.alipayobjects.com',
			'.alipayplus.com',
			'.ifaa.org.cn',
			'.luohanacademy.com',
			'.sinopayment.com.cn',
		],
		outbound: "Direct"
	})
	config.dns.rules.push({
		domain_suffix: [
			'.alipay-corp.com',
			'.alipay-eco.com',
			'.alipay-inc.com',
			'.alipay-traffic.com',
			'.alipay.cn',
			'.alipay.com',
			'.alipay.com.cn',
			'.alipay.hk',
			'.alipay.net',
			'.alipaydesign.com',
			'.alipaydev.com',
			'.alipaydns.com',
			'.alipayeshop.com',
			'.alipaylog.com',
			'.alipaymo.com',
			'.alipayobjects.com',
			'.alipayplus.com',
			'.ifaa.org.cn',
			'.luohanacademy.com',
			'.sinopayment.com.cn',
		],
		server: "dns-domestic"
	})
}

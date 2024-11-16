import { Config } from '../config/config';
import { Selector } from '../config/out';

export function bilibiliPass(config: Config) {
	config.route.rule_set.push({
		type: "remote",
		tag: "Bilibili",
		format: "source",
		url: "https://raw.githubusercontent.com/yangchuansheng/sing-box-geosite/main/rule/Bilibili.json",
		download_detour: "Proxy"
	})
	config.route.rules.push({
		rule_set: ["Bilibili"],
		outbound: "BiliBili"
	})
	config.outbounds.push({
		type: "selector",
		tag: "BiliBili",
		outbounds: (
			config.outbounds.find(outbound => outbound.tag == 'Proxy') as Selector
		).outbounds,
		default: "Direct"
	})
	config.dns.rules.push({
		rule_set: ["Bilibili"],
		server: "dns-oversea"
	})
}

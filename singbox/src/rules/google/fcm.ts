import { Config } from '../../config/config';
import { Selector } from '../../config/out';

export function fcmPass(config: Config) {
	config.route.rule_set.push({
		tag: "GoogleFCM",
		type: "remote",
		format: "binary",
		url: "https://raw.githubusercontent.com/KaringX/karing-ruleset/sing/ACL4SSR/GoogleFCM.srs",
		download_detour: "Proxy"
	})
	config.route.rules.push({
		rule_set: ["GoogleFCM"],
		outbound: "Fcm"
	})
	config.outbounds.push({
		type: "selector",
		tag: "Fcm",
		outbounds: (
			config.outbounds.find(outbound => outbound.tag == 'Proxy') as Selector
		).outbounds,
		interrupt_exist_connections: true
	})
	config.dns.rules.push({
		rule_set: ["GoogleFCM"],
		server: "dns-oversea"
	})
}

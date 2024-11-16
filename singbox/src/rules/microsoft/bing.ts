import { Config } from '../../config/config';

export function bingPass(config: Config) {
	config.route.rule_set.push({
		type: "remote",
		tag: "Bing",
		format: "source",
		url: "https://raw.githubusercontent.com/KaringX/karing-ruleset/sing/ACL4SSR/Bing.json",
		download_detour: "Proxy"
	})
	config.route.rules.push({
		rule_set: ["Bing"],
		outbound: "Proxy"
	})
	config.dns.rules.push({
		rule_set: ["Bing"],
		server: "dns-oversea"
	})
}

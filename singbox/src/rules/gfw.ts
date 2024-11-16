import { Config } from '../config/config';

export function gfwPass(config: Config) {
	config.route.rule_set.push({
		type: "remote",
		tag: "GFWList",
		format: "binary",
		url: "https://raw.githubusercontent.com/KaringX/karing-ruleset/sing/ACL4SSR/ProxyGFWlist.srs",
		download_detour: "Proxy"
	})
	config.route.rules.push({
		rule_set: ["GFWList"],
		outbound: "Proxy"
	})
	config.dns.rules.push({
		rule_set: ["GFWList"],
		server: "dns-oversea"
	})
}

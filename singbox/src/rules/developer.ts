import { Config } from '../config/config';

export function developerPass(config: Config) {
	config.route.rule_set.push({
		type: "remote",
		tag: "Developer",
		format: "binary",
		url: "https://raw.githubusercontent.com/KaringX/karing-ruleset/sing/ACL4SSR/Developer.srs",
		download_detour: "Proxy"
	})
	config.route.rules.push({
		rule_set: ["Developer"],
		outbound: "Proxy"
	})
	config.dns.rules.push({
		rule_set: ["Developer"],
		server: "dns-oversea"
	})
}

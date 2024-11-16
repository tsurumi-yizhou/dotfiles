import { Config } from '../config/config';

export function telegramPass(config: Config) {
	config.route.rule_set.push({
		type: "remote",
		tag: "Telegram",
		format: "binary",
		url: "https://raw.githubusercontent.com/KaringX/karing-ruleset/sing/ACL4SSR/Telegram.srs",
		download_detour: "Proxy"
	})
	config.route.rules.push({
		rule_set: ["Telegram"],
		outbound: "Proxy"
	})
	config.dns.rules.push({
		rule_set: ["Telegram"],
		server: "dns-oversea"
	})
}

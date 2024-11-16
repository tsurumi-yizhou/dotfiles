import { Config } from '../../config/config';
import { Selector } from '../../config/out';

export function onedrivePass(config: Config) {
	config.route.rule_set.push({
		tag: "OneDrive",
		type: "remote",
		format: "binary",
		url: "https://raw.githubusercontent.com/KaringX/karing-ruleset/sing/ACL4SSR/OneDrive.srs",
		download_detour: "Proxy"
	})
	config.route.rules.push({
		rule_set: ["OneDrive"],
		outbound: "OneDrive"
	})
	config.outbounds.push({
		type: "selector",
		tag: "OneDrive",
		outbounds: (config.outbounds.find(outbound => outbound.tag == 'Proxy') as Selector).outbounds
	})
	config.dns.rules.push({
		rule_set: ["OneDrive"],
		server: "dns-domestic"
	})
}

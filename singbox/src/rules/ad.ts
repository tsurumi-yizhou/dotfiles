import { Config } from '../config/config';

export function adPass(config: Config) {
	config.route.rule_set.push({
		type: "remote",
		tag: "AWAvenue",
		format: "binary",
		url: "https://raw.githubusercontent.com/TG-Twilight/AWAvenue-Ads-Rule/main/Filters/AWAvenue-Ads-Rule-Singbox.srs",
		download_detour: "Proxy"
	})
	config.route.rule_set.push({
		tag: "BanProgramAD",
		type: "remote",
		format: "binary",
		url: "https://raw.githubusercontent.com/KaringX/karing-ruleset/sing/ACL4SSR/BanProgramAD.srs",
		download_detour: "Proxy"
	})
	config.route.rule_set.push({
		tag: "BanADCompany",
		type: "remote",
		format: "binary",
		url: "https://raw.githubusercontent.com/KaringX/karing-ruleset/sing/ACL4SSR/BanADCompany.srs",
		download_detour: "Proxy"
	})
	config.route.rule_set.push({
		tag: "BanEasyListChina",
		type: "remote",
		format: "binary",
		url: "https://raw.githubusercontent.com/KaringX/karing-ruleset/sing/ACL4SSR/BanEasyListChina.srs",
		download_detour: "Proxy"
	})
	config.route.rule_set.push({
		tag: "360",
		type: "remote",
		format: "binary",
		url: "https://raw.githubusercontent.com/KaringX/karing-ruleset/sing/ACL4SSR/360.srs",
		download_detour: "Proxy"
	})
	config.route.rules.push({
		rule_set: ["AWAvenue", "BanProgramAD", "BanADCompany", "BanEasyListChina", "360"],
		outbound: "Block"
	})
	config.dns.rules.push({
		rule_set: ["AWAvenue", "BanProgramAD", "BanADCompany", "BanEasyListChina", "360"],
		server: "dns-block"
	})
}

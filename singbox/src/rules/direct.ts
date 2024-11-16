import { Config } from '../config/config';

export function chinaPass(config: Config) {
	config.route.rule_set.push({
			tag: "Alibaba",
			type: "remote",
			format: "binary",
			url: "https://raw.githubusercontent.com/KaringX/karing-ruleset/sing/ACL4SSR/Alibaba.srs",
			download_detour: "Proxy"
		},{
			tag: "ChinaDomain",
			type: "remote",
			format: "binary",
			url: "https://raw.githubusercontent.com/KaringX/karing-ruleset/sing/ACL4SSR/ChinaDomain.srs",
			download_detour: "Proxy"
		},
		{
			tag: "ChinaIp",
			type: "remote",
			format: "binary",
			url: "https://raw.githubusercontent.com/KaringX/karing-ruleset/sing/ACL4SSR/ChinaIp.srs",
			download_detour: "Proxy"
		},
		{
			tag: "ChinaMedia",
			type: "remote",
			format: "binary",
			url: "https://raw.githubusercontent.com/KaringX/karing-ruleset/sing/ACL4SSR/ChinaMedia.srs",
			download_detour: "Proxy"
		},
		{
			tag: "DiDi",
			type: "remote",
			format: "binary",
			url: "https://raw.githubusercontent.com/KaringX/karing-ruleset/sing/ACL4SSR/DiDi.srs",
			download_detour: "Proxy"
		},
		{
			tag: "Download",
			type: "remote",
			format: "binary",
			url: "https://raw.githubusercontent.com/KaringX/karing-ruleset/sing/ACL4SSR/Download.srs",
			download_detour: "Proxy"
		},
		{
			tag: "GoogleCN",
			type: "remote",
			format: "binary",
			url: "https://raw.githubusercontent.com/KaringX/karing-ruleset/sing/ACL4SSR/GoogleCN.srs",
			download_detour: "Proxy"
		},
		{
			tag: "HuaWei",
			type: "remote",
			format: "binary",
			url: "https://raw.githubusercontent.com/KaringX/karing-ruleset/sing/ACL4SSR/HuaWei.srs",
			download_detour: "Proxy"
		},
		{
			tag: "JD",
			type: "remote",
			format: "binary",
			url: "https://raw.githubusercontent.com/KaringX/karing-ruleset/sing/ACL4SSR/JD.srs",
			download_detour: "Proxy"
		},
		{
			tag: "NetEaseMusic",
			type: "remote",
			format: "binary",
			url: "https://raw.githubusercontent.com/KaringX/karing-ruleset/sing/ACL4SSR/NetEaseMusic.srs",
			download_detour: "Proxy"
		},
		{
			tag: "Sina",
			type: "remote",
			format: "binary",
			url: "https://raw.githubusercontent.com/KaringX/karing-ruleset/sing/ACL4SSR/Sina.srs",
			download_detour: "Proxy"
		},
		{
			tag: "SteamCN",
			type: "remote",
			format: "binary",
			url: "https://raw.githubusercontent.com/KaringX/karing-ruleset/sing/ACL4SSR/SteamCN.srs",
			download_detour: "Proxy"
		},
		{
			tag: "TapTap",
			type: "remote",
			format: "binary",
			url: "https://fastly.jsdelivr.net/gh/karingX/karing-ruleset@sing/ACL4SSR/TapTap.srs",
			download_detour: "Direct"
		})
	config.route.rules.push({
		rule_set: [
			"Alibaba",
			"ChinaDomain",
			"ChinaIp",
			"ChinaMedia",
			"DiDi",
			"Download",
			"GoogleCN",
			"HuaWei",
			"JD",
			"NetEaseMusic",
			"Sina",
			"SteamCN",
			"TapTap"
		],
		outbound: "Direct"
	})
	config.dns.rules.push({
		rule_set: [
			"Alibaba",
			"ChinaDomain",
			"ChinaIp",
			"ChinaMedia",
			"DiDi",
			"Download",
			"GoogleCN",
			"HuaWei",
			"JD",
			"NetEaseMusic",
			"Sina",
			"SteamCN",
			"TapTap"
		],
		server: "dns-domestic"
	})
}

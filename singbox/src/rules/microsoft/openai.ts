import { Config } from '../../config/config';
import { Selector } from '../../config/out';

export function openaiPass(config: Config) {
	config.route.rule_set.push({
		tag: "OpenAi",
		type: "remote",
		format: "source",
		url: "https://raw.githubusercontent.com/yangchuansheng/sing-box-geosite/main/rule/OpenAI.json",
		download_detour: "Proxy"
	})
	config.route.rules.push({
		rule_set: ["OpenAi"],
		outbound: "OpenAI"
	})
	config.route.rules.push({
		domain: ["chatgpt.com"],
		outbound: "OpenAI"
	})
	config.outbounds.push({
		type: "selector",
		tag: "OpenAI",
		outbounds: (
			config.outbounds.find(outbound => outbound.tag == 'Proxy') as Selector
		).outbounds
	})
}

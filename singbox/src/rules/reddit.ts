import { Config } from '../config/config';

export function redditPass(config: Config) {
	config.route.rules.push({
		package_name: ["ml.docilealligator.infinityforreddit"],
		outbound: "Proxy"
	})
	config.dns.rules.push({
		package_name: ["ml.docilealligator.infinityforreddit"],
		server: "dns-oversea"
	})
}

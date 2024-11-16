export interface RouteSingleRule {
	inbound?: string[],
	ip_version?: 6 | 4,
	network?: "tcp" | "udp",
	auth_user?: string[],
	protocol?: string[],
	client?: string[],
	domain?: string[],
	domain_suffix?: string[],
	domain_keyword?: string[],
	domain_regex?: string[],
	source_ip_cidr?: string[],
	source_ip_is_private?: boolean,
	ip_cidr?: string[],
	ip_is_private?: boolean,
	source_port?: number[],
	source_port_range?: string[],
	port?: number[],
	port_range?: string[],
	process_name?: string[],
	process_path?: string[],
	package_name?: string[],
	user?: string[],
	user_id?: number[],
	clash_mode?: "direct" | "global" | "rule",
	wifi_ssid?: string[],
	wifi_bssid?: string[],
	rule_set?: string[],
	invert?: boolean,
	outbound?: string
}

export interface RouteLogicalRule {
	type: "logical",
	mode: "and" | "or",
	rules: RouteSingleRule[],
	invert?: boolean,
	outbound: string
}

export type RouteRule = RouteSingleRule | RouteLogicalRule

export interface LocalRuleSet {
	type: "local",
	tag: string,
	format: "source" | "binary",
	path: string
}

export interface RemoteRuleSet {
	type: "remote",
	tag: string,
	format: "source" | "binary",
	url: string,
	download_detour?: string,
	update_interval?: string
}

export type RuleSet = LocalRuleSet | RemoteRuleSet

export interface Route {
	geoip?: {
		path: string,
		download_url: string,
		download_detour: string
	},
	geosite?: {
		path: string,
		download_url: string,
		download_detour: string
	},
	rules: RouteRule[],
	rule_set: RuleSet[],
	final: string,
	auto_detect_interface?: boolean,
	override_android_vpn?: boolean,
	default_interface?: string,
	default_mark?: number
}

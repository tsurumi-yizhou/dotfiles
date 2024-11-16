export interface DnsServer {
	tag: string,
	address: string,
	address_resolver?: string,
	address_strategy?: "prefer_ipv4" | "prefer_ipv6" | "ipv4_only" | "ipv6_only",
	strategy?: "prefer_ipv4" | "prefer_ipv6" | "ipv4_only" | "ipv6_only",
	detour?: string,
	client_subnet?: string
}

export interface SingleRule {
	inbound?: string[],
	ip_version?: 6 | 4,
	query_type?: (string | number)[],
	network?: string,
	auth_user?: string[],
	protocol?: string[],
	domain?: string[],
	domain_suffix?: string[],
	domain_keyword?: string[],
	domain_regex?: string[],
	geoip?: string[],
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
	clash_mode?: string,
	wifi_ssid?: string[],
	wifi_bssid?: string[],
	rule_set?: string[],
	rule_set_ip_cidr_match_source?: boolean,
	rule_set_ip_cidr_accept_empty?: boolean,
	invert?: boolean,
	outbound?: string[],
	server?: string,
	disable_cache?: boolean,
	rewrite_ttl?: number,
	client_subnet?: string
}

export interface Logical {
	type: "logical",
	mode: "and" | "or",
	rules: SingleRule[],
	server: string,
	disable_cache?: boolean,
	rewrite_ttl?: number,
	client_subnet?: string
}

export type DnsRule = SingleRule | Logical

export interface Dns {
	servers: DnsServer[],
	rules: DnsRule[],
	final: string,
	strategy?: string,
	disable_cache?: boolean,
	disable_expire?: boolean,
	independent_cache?: boolean,
	reverse_mapping?: boolean,
	client_subnet?: string,
	fakeip?: {
		enabled: boolean,
		inet4_range: string,
		inet6_range: string
	}
}

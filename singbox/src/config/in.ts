export interface Direct {
	type: "direct",
	tag: string,
	network: "udp" | "tcp",
	override_address: string,
	override_port: number,
	listen: string,
	listen_port?: number,
	tcp_fast_open?: boolean,
	tcp_multi_path?: boolean,
	udp_fragment?: boolean,
	udp_timeout?: string,
	detour?: string,
	sniff?: boolean,
	sniff_override_destination?: boolean,
	sniff_timeout?: string,
	domain_strategy?: "prefer_ipv4" | "prefer_ipv6" | "ipv4_only" | "ipv6_only",
	udp_disable_domain_unmapping?: boolean
}

export interface Mixed {
	type: "mixed",
	tag: string,
	set_system_proxy?: boolean,
	listen: string,
	listen_port?: number,
	tcp_fast_open?: boolean,
	tcp_multi_path?: boolean,
	udp_fragment?: boolean,
	udp_timeout?: string,
	detour?: string,
	sniff?: boolean,
	sniff_override_destination?: boolean,
	sniff_timeout?: string,
	domain_strategy?: "prefer_ipv4" | "prefer_ipv6" | "ipv4_only" | "ipv6_only",
	udp_disable_domain_unmapping?: boolean
}

export interface Tun {
	type: "tun",
	tag: string,
	interface_name?: string,
	inet4_address: string,
	mtu?: number,
	gso?: boolean,
	auto_route?: boolean,
	iproute2_table_index?: number,
	iproute2_rule_index?: number,
	auto_redirect?: boolean,
	auto_redirect_input_mark?: string,
	auto_redirect_output_mark?: string,
	strict_route?: boolean,
	route_address?: string[],
	route_exclude_address?: string[],
	route_address_set?: string[],
	route_exclude_address_set?: string[],
	endpoint_independent_nat?: boolean,
	stack: "system" | "gvisor" | "mixed",
	include_interface?: string[],
	exclude_interface?: string[],
	include_uid?: number[],
	include_uid_range?: string[],
	exclude_uid?: number[],
	exclude_uid_range?: string[],
	include_android_user?: number[],
	include_package?: string[],
	exclude_package?: string[],
	platform?: {
		http_proxy?: {
			enabled: boolean,
			server: string,
			server_port: number,
			bypass_domain: string[],
			match_domain: string[]
		}
	},
	listen?: string,
	listen_port?: number,
	tcp_fast_open?: boolean,
	tcp_multi_path?: boolean,
	udp_fragment?: boolean,
	udp_timeout?: string,
	detour?: string,
	sniff?: boolean,
	sniff_override_destination?: boolean,
	sniff_timeout?: string,
	domain_strategy?: "prefer_ipv4" | "prefer_ipv6" | "ipv4_only" | "ipv6_only",
	udp_disable_domain_unmapping?: boolean
}

export interface Socks {
	type: "socks",
	tag: string,
	listen: string,
	listen_port?: number,
	tcp_fast_open?: boolean,
	tcp_multi_path?: boolean,
	udp_fragment?: boolean,
	udp_timeout?: string,
	detour?: string,
	sniff?: boolean,
	sniff_override_destination?: boolean,
	sniff_timeout?: string,
	domain_strategy?: "prefer_ipv4" | "prefer_ipv6" | "ipv4_only" | "ipv6_only",
	udp_disable_domain_unmapping?: boolean
}

export interface Http {
	type: "http",
	tag: string,
	tls?: {
		enabled?: boolean,
		server_name?: string,
		alpn?: string[],
		min_version?: string,
		max_version?: string,
		cipher_suites?: string[],
		certificate?: string[],
		certificate_path?: string,
		key?: string[],
		key_path?: string,
		acme?: {
			domain?: string[],
			data_directory?: string,
			default_server_name?: string,
			email?: string,
			provider?: string,
			disable_http_challenge?: boolean,
			disable_tls_alpn_challenge?: boolean,
			alternative_http_port?: number,
			alternative_tls_port?: number,
			external_account?: {
				key_id?: string,
				mac_key?: string
			},
			dns01_challenge?: {}
		},
		ech?: {
			enabled?: boolean,
			pq_signature_schemes_enabled?: boolean,
			dynamic_record_sizing_disabled?: boolean,
			key?: string[],
			key_path?: string
		},
		reality?: {
			enabled?: boolean,
			handshake?: {
				server?: string,
				server_port?: number,
				detour?: string,
				bind_interface?: string,
				inet4_bind_address?: string,
				inet6_bind_address?: string,
				routing_mark?: number,
				reuse_addr?: boolean,
				connect_timeout?: string,
				tcp_fast_open?: boolean,
				tcp_multi_path?: string,
				udp_fragment?: boolean,
				domain_strategy?: "prefer_ipv4" | "prefer_ipv6" | "ipv4_only" | "ipv6_only",
				fallback_delay?: string
			},
			private_key?: string,
			short_id?: string[],
			max_time_difference?: string
		}
	},
	set_system_proxy?: boolean,
	listen: string,
	listen_port?: number,
	tcp_fast_open?: boolean,
	tcp_multi_path?: boolean,
	udp_fragment?: boolean,
	udp_timeout?: string,
	detour?: string,
	sniff?: boolean,
	sniff_override_destination?: boolean,
	sniff_timeout?: string,
	domain_strategy?: "prefer_ipv4" | "prefer_ipv6" | "ipv4_only" | "ipv6_only",
	udp_disable_domain_unmapping?: boolean
}

export type Inbound = Direct | Mixed | Tun | Socks | Http

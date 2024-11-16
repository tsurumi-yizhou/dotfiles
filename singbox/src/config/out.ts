export interface Direct {
	type: "direct",
	tag: string,
	override_address?: string,
	override_port?: number,
	proxy_protocol?: 1 | 2,
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
}

export interface Block {
	type: "block",
	tag: string
}

export interface Dns {
	type: "dns",
	tag: string
}

export interface Vless {
	type: string,
	tag: string,
	server: string,
	server_port: number,
	uuid: string,
	transport: {
		path: string,
		type: string,
		max_early_data: number,
		early_data_header_name: string,
		headers?: {}
	},
	tls: {
		enabled: boolean,
		server_name: string,
		insecure?: boolean,
		utls: {
			enabled: boolean,
			fingerprint: string
		}
	}
}

export interface ShadowSocks {
	type: "shadowsocks",
	tag: string,
	server: string,
	server_port: number,
	method: string,
	password: string,
	plugin?: string,
	plugin_opts?: string,
	network: string,
	upd_over_tcp: boolean
}

export interface Selector {
	type: "selector",
	tag: string,
	outbounds: string[],
	default?: string,
	interrupt_exist_connections?: boolean
}

export interface URLTest {
	type: "urltest",
	tag: string,
	outbounds: string[],
	url?: string,
	interval?: string,
	tolerance?: number,
	idle_timeout?: string,
	interrupt_exist_connections?: boolean
}

export type Outbound = Direct | Block | Dns | Vless | ShadowSocks | Selector | URLTest

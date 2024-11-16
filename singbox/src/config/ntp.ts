export interface Ntp {
	enabled?: boolean,
	server: string,
	server_port?: number,
	interval?: string,
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

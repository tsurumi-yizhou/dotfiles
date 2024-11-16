export interface Experimental {
	cache_file?: {
		enabled?: boolean,
		path?: string,
		cache_id?: string,
		store_fakeip?: boolean,
		store_rdrc?: boolean,
		rdrc_timeout?: string
	},
	clash_api?: {
		external_controller?: string,
		external_ui?: string,
		external_ui_download_url?: string,
		external_ui_download_detour?: string,
		secret?: string,
		default_mode?: string,
		access_control_allow_origin?: string[],
		access_control_allow_private_network?: boolean,
	},
	v2ray_api?: {
		listen: string,
		stats: {
			enabled: boolean,
			inbounds: string[],
			outbounds: string[],
			users: string[]
		}
	}
}

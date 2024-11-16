export interface Log {
	disabled?: boolean,
	level?: "trace" | "debug" | "info" | "warn" | "error" | "fatal" | "panic",
	output?: string,
	timestamp?: boolean
}

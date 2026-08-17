export enum ToolSource {
	BUILTIN = 'builtin',
	MCP = 'mcp',
	CUSTOM = 'custom',
	FRONTEND = 'frontend',
	/** Settings-only source for the Skills adapters. */
	SKILLS = 'skills'
}

export enum ToolPermissionDecision {
	ALWAYS = 'always',
	ALWAYS_SERVER = 'always_server',
	ONCE = 'once',
	DENY = 'deny'
}

export enum ToolResponseField {
	PLAIN_TEXT = 'plain_text_response',
	ERROR = 'error'
}

/** Valid `file_glob_search` type values. */
export enum GlobSearchType {
	FILE = 'file',
	DIR = 'dir',
	ALL = 'all'
}

/** Built-in tool names emitted on the wire. */
export enum BuiltInTool {
	READ_FILE = 'read_file',
	READ_MEDIA = 'read_media',
	EDIT_FILE = 'edit_file',
	WRITE_FILE = 'write_file',
	GET_DATETIME = 'get_datetime',
	GET_INFO = 'get_info',
	FILE_GLOB_SEARCH = 'file_glob_search',
	GREP_SEARCH = 'grep_search',
	EXEC_SHELL_COMMAND = 'exec_shell_command',
	RUN_JAVASCRIPT = 'run_javascript'
}

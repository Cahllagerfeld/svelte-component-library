export declare interface Task {
	init?: string;
	command?: string;
}

export declare interface GitpodConfig {
	tasks: Task[];
}

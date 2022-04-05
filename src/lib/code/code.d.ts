export declare interface Task {
	init?: string;
	command?: string;
}

export declare interface GitpodConfig {
	tasks?: Task[];
	vscode?: Vscode;
}

export interface Vscode {
	extensions: string[];
}

declare module OpenVsxExtension {
	export interface Files {
		download: string;
		icon: string;
	}

	export interface Extension {
		url: string;
		files: Files;
		name: string;
		namespace: string;
		version: string;
		timestamp: Date;
		averageRating: number;
		downloadCount: number;
		displayName: string;
		description: string;
	}

	export interface RootObject {
		offset: number;
		totalSize: number;
		extensions: Extension[];
	}
}

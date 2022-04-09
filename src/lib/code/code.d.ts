export declare interface Task {
	init?: string[];
	command?: string[];
}

export declare interface GitpodConfig {
	tasks?: Task[];
	vscode?: Vscode;
}

export interface Vscode {
	extensions: Map<string, OpenVsxExtension.Extension>;
}

declare module OpenVsxExtension {
	export interface Files {
		download?: string;
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
		downloadCount?: number;
		displayName: string;
		description?: string;
	}

	export interface RootObject {
		offset: number;
		totalSize: number;
		extensions: Extension[];
	}
}

export declare interface ConvertedConfig {
	tasks?: convertedTask[];
	vscode?: convertedVscode;
}

export declare interface convertedTask {
	init?: string;
	command?: string;
}

export declare interface convertedVscode {
	extensions: string[];
}

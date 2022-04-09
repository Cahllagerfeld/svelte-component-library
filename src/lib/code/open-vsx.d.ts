declare module VSXDetailResponse {
	export interface Files {
		download: string;
		manifest: string;
		readme: string;
		changelog: string;
		icon: string;
	}

	export interface PublishedBy {
		loginName: string;
		fullName: string;
		avatarUrl: string;
		homepage: string;
		provider: string;
	}

	export interface Engines {
		vscode: string;
	}

	export interface RootObject {
		namespaceUrl: string;
		reviewsUrl: string;
		files: Files;
		name: string;
		namespace: string;
		version: string;
		publishedBy: PublishedBy;
		verified: boolean;
		unrelatedPublisher: boolean;
		namespaceAccess: string;
		allVersions: any;
		averageRating: number;
		downloadCount: number;
		reviewCount: number;
		versionAlias: string[];
		timestamp: Date;
		preview: boolean;
		displayName: string;
		description: string;
		engines: Engines;
		categories: string[];
		extensionKind: string[];
		tags: string[];
		license: string;
		homepage: string;
		repository: string;
		bugs: string;
		galleryColor: string;
		galleryTheme: string;
		dependencies: any[];
		bundledExtensions: any[];
	}
}

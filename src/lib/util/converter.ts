import type { convertedTask, OpenVsxExtension } from '../code/code';

export const convertExtensionToInternal = async (
	extension: string,
	map: Map<string, OpenVsxExtension.Extension>
) => {
	const splitExtension = extension.split('.');
	const url = `https://open-vsx.org/api/${splitExtension[0]}/${splitExtension[1]}`;
	const resp = await fetch(url);
	const data = (await resp.json()) as VSXDetailResponse.RootObject;

	map.set(url, {
		version: data.version,
		name: data.name,
		url,
		averageRating: data.averageRating,
		displayName: data.displayName,
		namespace: data.namespace,
		timestamp: data.timestamp,
		files: {
			icon: data.files.icon
		}
	});
};

export const convertTaskToInternal = (task: convertedTask) => {
	let init = task.init?.split('\n').filter((el) => el);
	let command = task.command?.split('\n').filter((el) => el);
	return {
		init,
		command
	};
};

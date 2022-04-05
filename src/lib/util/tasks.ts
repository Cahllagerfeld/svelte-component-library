export const convertCommands = (array: String[]) => {
	if (array.length < 1) {
		return;
	}
	const sanitizedStrings = array.filter((el) => el);
	if (sanitizedStrings.length < 1) {
		return;
	}
	let joinedCommands = sanitizedStrings.join('\n');
	if (array.length > 1) {
		joinedCommands = joinedCommands.concat('\n');
	}
	return joinedCommands;
};

export const removeCommandTaskByIndex = (array: String[], index: number) => {
	array = array.filter((_, i) => i !== index);
};

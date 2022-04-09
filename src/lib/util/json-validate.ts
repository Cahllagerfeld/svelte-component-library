import Ajv from 'ajv';

const ajv = new Ajv();

const schema = {
	type: 'object',
	properties: {
		tasks: {
			type: 'array',
			items: {
				type: 'object',
				properties: {
					init: { type: 'string', nullable: true },
					command: { type: 'string', nullable: true }
				},
				nullable: true
			},
			nullable: true
		},
		vscode: {
			type: 'object',
			properties: {
				extensions: {
					type: 'array',
					items: {
						type: 'string'
					},
					nullable: true
				}
			},
			nullable: true
		}
	}
};

export const validate = ajv.compile(schema);

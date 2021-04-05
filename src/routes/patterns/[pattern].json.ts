import patterns from './_patterns';

export function get({ params }) {
	if (params.pattern in patterns) {
		return {
			body: patterns[params.pattern]
		};
	}

	return {
		status: 404
	};
}

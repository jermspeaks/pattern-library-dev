import patterns from './_patterns';

export function get() {
	return {
		body: Object.keys(patterns).map((pattern) => ({
			pattern,
			...patterns[pattern]
		}))
	};
}

<script>
	// import db from '$lib/database';

	/**
	 * @type {import('@sveltejs/kit').RequestHandler}
	 */
	export async function get({ params }) {
		// the `slug` parameter is available because this file
		// is called [slug].json.js
		const { slug } = params;
		console.log('slug', slug);

		// const article = await db.get(slug);

		// if (article) {
		//   return {
		//     body: {
		//       article
		//     }
		//   };
		// }
		return { body: { article: 'foo' } };
	}
</script>

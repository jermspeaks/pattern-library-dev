<script context="module">
	export const prerender = true;

	export async function load({ page, fetch }) {
		const res = await fetch(`/patterns/${page.params.pattern}.json`);
		return {
			props: {
				pattern: await res.json()
			}
		};
	}
</script>

<script>
	export let pattern;
</script>

<svelte:head>
	<title>{pattern.title}</title>
</svelte:head>

<h1>{pattern.title}</h1>
<div class="post">
	{pattern.component}
</div>

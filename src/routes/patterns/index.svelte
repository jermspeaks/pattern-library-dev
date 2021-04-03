<script>
	import patterns from './patterns.json';
</script>

<table class="pattern-table">
	<tbody
		><tr>
			<td />
			<td class="body_single">
				<a href="search.html" class="footer_navi">
					<div class="search_long_button">Search by Function</div>
				</a>

				<a href="home_list.html" class="footer_navi">
					<div class="list_long_button">View by List</div>
				</a>
			</td>
			<td />
		</tr>
		<tr>
			<td />

			<td class="body">
				<!--  ON METHOD BUTTONS  -->

				<br />

				{#each patterns as pattern}
					<div class="circle-block">
						<a href="patterns/{pattern.link}" class="circle">
							<img class="circle" src={pattern.imageSrc} alt="data visualization" />
						</a>
						<p>{pattern.name}</p>
					</div>
				{/each}
			</td>
			<td />
		</tr>
	</tbody>
</table>

<style>
	table.pattern-table {
		width: 100%;
	}

	td.body {
		display: flex;
		flex-wrap: wrap;
	}

	div.circle-block {
		flex: 20%;
	}
</style>

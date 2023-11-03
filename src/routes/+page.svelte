<script>
	import Login from '$lib/Components/Login.svelte';
	import '../app.css';
</script>

<main>
	<h1>Hello Mathematician!</h1>
	<div class="container">
		<Login />
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	.container {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	h1 {
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

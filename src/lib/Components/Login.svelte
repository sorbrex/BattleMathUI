<script lang="ts">
	import Avatar from '$lib/Components/Avatar.svelte';
	import Frame from '$lib/Components/Frame.svelte';
	import { goto } from '$app/navigation';

	let username: string = '';

	const handleSubmit = () => {
		//submittedUsername = username;
		console.log(username);
		let gameUrl = '/game?username=' + username;
		goto(gameUrl);
	};
</script>

<main>
	<Frame>
		<Avatar />
		<div class="content">
			<form on:submit|preventDefault={handleSubmit}>
				<h3>Insert a Name and Start:</h3>
				<input bind:value={username} type="text" placeholder="Heisenberg" class="textInput" />
			</form>
		</div>
	</Frame>
</main>

<style>
	h3 {
		text-align: center;
		color: #2f4858;
	}
</style>

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
				<input bind:value={username} type="text" placeholder="Heisenberg" class="name" />
			</form>
		</div>
	</Frame>
</main>

<style>
	h3 {
		text-align: center;
		color: #2f4858;
	}

	input {
		width: 250px;
		border-radius: 10px;
		border: 2px solid #f2f2f2;
		padding: 1rem;
		font-size: 1.2rem;
	}

	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
		bottom: 25px;
	}
</style>

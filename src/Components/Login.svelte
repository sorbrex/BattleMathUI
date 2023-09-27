<script>
	import Avatar from '../Components/Avatar.svelte';
	import Frame from '../Components/Frame.svelte';
</script>

<main>
	<Frame>
		<Avatar />
		<div class="content">
			<h3>Insert a Name and Start:</h3>
			<input type="text" placeholder="Heisenberg" class="name" />
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

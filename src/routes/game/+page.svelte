<script lang="ts">
	import { goto } from '$app/navigation';

	import {currentQuestion, modalVisible, playerScores} from '$lib/Store/Store';

	import {MODAL_SETTINGS, MODAL_STYLE} from "$lib/Constant";
	import type {WSQuestion} from "$lib/Interfaces/Interfaces";

	import CustomModal from "$lib/Components/CustomModal.svelte";
	import Frame from '$lib/Components/Frame.svelte';

	import {submitScore} from "$lib/ClientIO";

	import smodale from 'smodale';

	//export let data: { username: string };
	//const username = data.username;

	let answerColor: string = '#2f4858`';
	let score = 0;
	let question: WSQuestion;
	let answer: number | null;

	$: question = $currentQuestion;
	$: scoreboard = $playerScores;

	$: {
		if($modalVisible){
			smodale.show(CustomModal, MODAL_SETTINGS, MODAL_STYLE)
			.then(() => { // 'hidden'
				goto('/lobby')
				modalVisible.set(false)
			})
			.catch(() => { // 'cancel'
				goto('/')
				modalVisible.set(false)
			});
		}
	}
	function handleAnswer() {
		if (answer === question.answer) {
			score++;
			console.log('Correct!');
			answerColor = '#77dd77';
			submitScore(score)
			//emit points to server
		} else {
			console.log('Wrong!');
			answerColor = '#dd7777';
		}
		answer = null
	}


</script>

<main>
	<div class="gameUI">

		<div class="scoreboard">
			<h3>Scoreboard</h3>
			{#each Object.entries(scoreboard) as [key, value]}
				<p id={key}>{value.name}: {value.score}</p>
			{/each}
		</div>

		<Frame>
			<h1>Show Your Skill !</h1>

			<div class="content">
				<form on:submit|preventDefault={handleAnswer}>
					<h2>{question.question}</h2>
					<input bind:value={answer} type="number" placeholder="Answer" class="textInput" style={`border: 2px solid ${answerColor}`} />
				</form>
			</div>

			<h3>Your Score: {score}</h3>
		</Frame>

	</div>
</main>

<style>
	main {
		text-align: center;
		margin: 0 auto;

		width: 100%;
		height: 90%;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	input{
		outline: none;
	}

	.scoreboard {
		border-radius: 10px;
		padding: 10px;
		width: 200px;
		height: 400px;
		background-color: #f0f0f0;
		box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
	}

	.gameUI {
		border: 3px solid #2f4858;
		border-radius: 10px;

		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;

		min-width: 700px;
		min-height: 500px;
	}
</style>

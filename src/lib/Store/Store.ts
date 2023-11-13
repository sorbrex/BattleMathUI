import type { Socket } from 'socket.io-client';
import type {WSPlayers, WSQuestion} from "$lib/Interfaces/Interfaces";
import { writable } from 'svelte/store';

export const storedClientIOInstance = writable<Socket>();

export const currentQuestion = writable<WSQuestion>({
	question: '',
	answer: 0
});

export const playerScores = writable<WSPlayers>({});

export const modalVisible = writable<boolean>(false);
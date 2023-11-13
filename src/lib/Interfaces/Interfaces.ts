export type WSQuestion = {
	question: string;
	answer: number;
}

export type PlayerInfo = {
	name: string;
	score: number;
}

export type WSPlayers = {
	[key: string]: PlayerInfo;
}

import ioClient, { Socket } from 'socket.io-client';
import {storedClientIOInstance, currentQuestion, playerScores, modalVisible} from '$lib/Store/Store';
import type {WSPlayers, WSQuestion} from "$lib/Interfaces/Interfaces";

let clientIO: Socket | undefined;

storedClientIOInstance.subscribe((value: Socket) => {
  clientIO = value;
  console.log('Event Source Instance Updated: ', clientIO?.id);
});

export function initializeClient(username: string) {
  //Initialize the client
  clientIO && clientIO.close()
  clientIO = ioClient(process.env.API_URL || 'http://localhost:3000');
  storedClientIOInstance.set(clientIO);
  clientIO.emit('registerUsername', username);

  //Runtime Events
  clientIO.on("connect", () => {
    console.log('Session Opened with ID: ' + clientIO?.id);
  });

  clientIO.on("disconnect", (reason) => {
    if (reason === "io server disconnect") {
      clientIO?.connect();
    }
  });

  clientIO.on("connect_error", (error) => {
    console.log('Connection Error: ' + error);
  });

  //Custom Events
  clientIO.on('question', (question: WSQuestion) => {
    currentQuestion.set(question);
  });

  clientIO.on('updateScoreboard', (players: WSPlayers) => {
    //console.log('Updating Scoreboard: ', JSON.stringify(players, null, 2));
    playerScores.set(players);
  });

  clientIO.on('gameOver', () => {
    modalVisible.set(true);
  });

}

export function submitScore(score: number) {
  clientIO?.emit('updateScore', score);
}
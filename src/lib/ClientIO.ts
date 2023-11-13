import ioClient, { Socket } from 'socket.io-client';
import {storedClientIOInstance, currentQuestion, playerScores, modalVisible} from '$lib/Store/Store';
import { API_URL } from '$lib/Constant';
import type {WSPlayers, WSQuestion} from "$lib/Interfaces/Interfaces";

let clientIO: Socket | undefined;

storedClientIOInstance.subscribe((value: Socket) => {
  console.log('Event Source Instance: ' + value);
  clientIO = value;
});

export function initializeClient(username: string) {
  //Initialize the client
  clientIO && clientIO.close()
  clientIO = ioClient(API_URL);
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
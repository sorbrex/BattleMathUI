import ioClient, { Socket } from 'socket.io-client';
import { storedClientIOInstance } from '$lib/Store/Store';
import { API_URL } from '$lib/Constant';

let clientIO: Socket | undefined;

storedClientIOInstance.subscribe((value: Socket) => {
  console.log('Event Source Instance: ' + value);
  clientIO = value;
});

export function initializeClient() {
  //Initialize the client
  clientIO && clientIO.close()
  clientIO = ioClient(API_URL);
  storedClientIOInstance.set(clientIO);

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
  clientIO.on('message', (message) => {
    console.log('message: ' + message);
  });

  clientIO.on('name', (name) => {
    console.log('name: ' + name);
  });

}
import { Socket } from "socket.io";
import startGameOfTheRoom from "./start-game-of-the-room/startGameOfTheRoom.js";

type dataFromClientType = {
  roomId: string;
  playerId: string;
};

const startGame = (dataFromClient: dataFromClientType) => {
  const { roomId, playerId } = dataFromClient;
  startGameOfTheRoom(roomId);
};

export default startGame;

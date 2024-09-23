import stopTheGameOfTheRoom from "./stop-it/stopTheGameNow.js";

const stopGame = (
  dataFromClient: dataFromClientForStoppingAndStartingGameType
) => {
  const { roomId } = dataFromClient;
  stopTheGameOfTheRoom(roomId);
};

export default stopGame;

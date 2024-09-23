import { Socket } from "socket.io";
import getGamingData from "../get-gaming-data/getGamingData.js";
import getGamingDataAccordingToRoom from "./getGamingDataAccordingToRoom.js";
import updatePlayerRequestTimestamp from "../update-player-request-timestamp/updatePlayerRequestTimestamp.js";

const sendGamingDataToUsers = async (socket: Socket, dataFromClient: any) => {
  try {
    const { roomId, playerId, timeStamp } = dataFromClient;

    const data = await getGamingDataAccordingToRoom(roomId);
    await updatePlayerRequestTimestamp(roomId, playerId, timeStamp);
    socket.emit("clientSideGameDataReceiver", data);
  } catch (error) {
    console.log(error);
  }
};

export default sendGamingDataToUsers;

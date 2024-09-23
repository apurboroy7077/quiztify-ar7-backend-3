import express from "express";
import getGamingData from "../../../socket/functions/get-gaming-data/getGamingData.js";
import createRoom from "../../../custom-functions/create-room/createRoom.js";
import addPlayerToRoom from "../../../custom-functions/add-player-to-room/addPlayerToRoom.js";

const joinRoomController = async (
  request: express.Request,
  response: express.Response
) => {
  try {
    const receivedData = await request.body;
    console.log(receivedData);
    const { roomId, playerName } = receivedData;
    console.log(roomId, playerName);
    const data = await addPlayerToRoom(roomId, playerName);
    response.status(201).send(data);
  } catch (error) {
    response.status(500).send(error);
  }
};

export default joinRoomController;

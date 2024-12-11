// import { createServer } from "http";
// import { Server, Socket } from "socket.io";
// import getUsersData from "./functions/getUsersData.js";
// import sendDataToUsers from "./functions/send-data-to-users/sendDataToUsers.js";
// import sendGamingDataToUsers from "./functions/send-gaming-data-to-users/sendGamingDataToUsers.js";
// import refineGamingData from "./functions/refine-gaming-data/refineGamingData.js";

// const httpServer = createServer();
// const socket = new Server(httpServer, {
//   cors: {
//     origin: "*",
//   },
// });

// socket.on("connect", (mySocket) => {
//   mySocket.emit("message", "I am a message from server");
//   mySocket.on("getGamingData", (data) => {
//     sendGamingDataToUsers(mySocket, data);
//   });
//   mySocket.on("startGame", (data) => {});
// });

// const port = 5007;
// httpServer.listen(port, () => {
//   console.log(`Socket Server is started at http://localhost:${port}`);
// });
import { Express } from "express";
import { Server as SocketIOServer } from "socket.io";
import { createServer } from "http";

export const combineSocketAndExpressAndReturnCombinedServer = (
  server: Express
) => {
  const httpServer = createServer(server);

  const io = new SocketIOServer(httpServer, {
    cors: {
      origin: "*", // Adjust origin to restrict access
      methods: ["GET", "POST"],
    },
  });

  // Handle Socket.IO connections
  io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    // Example event handling
    socket.on("message", (data) => {
      console.log("Message received:", data);
      io.emit("message", data); // Broadcast message to all clients
    });
    socket.on("roomDataRequest", (data) => {
      console.log(data);
    });
    socket.on("disconnect", () => {
      console.log("A user disconnected:", socket.id);
    });
  });

  return httpServer;
};

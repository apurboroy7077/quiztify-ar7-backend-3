import { createServer } from "http"; // Import HTTP to create a server
import { Server as SocketIOServer } from "socket.io"; // Import Socket.IO
import server from "./app.js"; // Import your Express app
import { EXPRESS_SERVER_PORT } from "./data/quiz-game/environment-variable.js";
// Create an HTTP server
const httpServer = createServer(server);
// Initialize Socket.IO with the HTTP server
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
// Start the server
httpServer.listen(EXPRESS_SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${EXPRESS_SERVER_PORT}`);
});
export { io }; // Export io if needed for use elsewhere
//# sourceMappingURL=index.js.map
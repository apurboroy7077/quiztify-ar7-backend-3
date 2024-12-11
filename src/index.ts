// IMPORTANT NOTE
// IF YOU DO NOT WANT TO USE BOTH SOCKET AND EXPRESS THEN USE "expressServer" only, listen it exactly like "combinedExpressAndSocketServer" and it will work

import expressServer from "./app.js"; // Import your Express app
import { EXPRESS_SERVER_PORT } from "./data/quiz-game/environment-variable.js";
import { combineSocketAndExpressAndReturnCombinedServer } from "./socket/socket.js";

const combinedExpressAndSocketServer =
  combineSocketAndExpressAndReturnCombinedServer(expressServer);

// Start the server
combinedExpressAndSocketServer.listen(EXPRESS_SERVER_PORT, () => {
  console.log(`Server is running on http://localhost:${EXPRESS_SERVER_PORT}`);
});

export default combinedExpressAndSocketServer;

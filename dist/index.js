import server from "./app.js";
import { EXPRESS_SERVER_PORT } from "./data/quiz-game/environment-variable.js";
server.listen(EXPRESS_SERVER_PORT, () => {
    console.log(`Express server is running on http://localhost:${EXPRESS_SERVER_PORT}`);
});
export const connectMe = 7;
//# sourceMappingURL=index.js.map
import express from "express";
import { crashServerController, testController, testController2, } from "../../controllers/test/test.controller.js";
import { test2Controller } from "../../controllers/test/test2.controller.js";
const testingRouter = express.Router();
testingRouter.get("/test/1", testController);
testingRouter.get("/test/2", testController2);
testingRouter.get("/crash-server", crashServerController);
testingRouter.post("/test-2", test2Controller);
export { testingRouter };
//# sourceMappingURL=testingRouter.route.js.map
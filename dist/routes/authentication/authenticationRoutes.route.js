import express from "express";
import { signUpController } from "../../controllers/authentication/sign-up/signUp.controller.js";
import { verifyAccountController } from "../../controllers/authentication/verify-account/verifyAccount.controller.js";
import { signInController } from "../../controllers/authentication/sign-in/signIn.controller.js";
import { getUserDataByAuthenticationTokenController } from "../../controllers/authentication/get-user-data-by-authentication-token/getUserDataByAuthenticationToken.controller.js";
const authenticationRouter = express.Router();
authenticationRouter.post("/authentication/sign-up", signUpController);
authenticationRouter.post("/authentication/verify-account", verifyAccountController);
authenticationRouter.post("/authentication/sign-in", signInController);
authenticationRouter.post("/authentication/get-user-data-by-authentication-token", getUserDataByAuthenticationTokenController);
export { authenticationRouter };
//# sourceMappingURL=authenticationRoutes.route.js.map
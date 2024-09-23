import express from "express";
import { signUpController } from "../../controllers/authentication/sign-up/signUp.controller";
import { verifyAccountController } from "../../controllers/authentication/verify-account/verifyAccount.controller";
import { signInController } from "../../controllers/authentication/sign-in/signIn.controller";
import { getUserDataByAuthenticationTokenController } from "../../controllers/authentication/get-user-data-by-authentication-token/getUserDataByAuthenticationToken.controller";

const authenticationRouter = express.Router();
authenticationRouter.post("/authentication/sign-up", signUpController);
authenticationRouter.post(
  "/authentication/verify-account",
  verifyAccountController
);
authenticationRouter.post("/authentication/sign-in", signInController);
authenticationRouter.post(
  "/authentication/get-user-data-by-authentication-token",
  getUserDataByAuthenticationTokenController
);
export { authenticationRouter };

import express from "express";
import { parseJwtToken } from "../../../custom-functions-2/1/parse-authentication-token/parseAuthenticationToken.js";
import { JWT_SECRET_KEY } from "../../../data/others/EnvironmentVariables.js";
import giveUserDataFromSqlDatabaseByEmail from "../../../custom-functions-2/1/give-user-data-from-sql-database-by-email/giveUserDataFromSqlDatabaseByEmail.js";

export const getUserDataByAuthenticationTokenController = async (
  request: express.Request,
  response: express.Response
) => {
  try {
    const receivedData = request.body;
    const { authenticationToken } = receivedData;
    const userData: any = await parseJwtToken(
      authenticationToken,
      JWT_SECRET_KEY
    );
    const userEmail = userData.email;
    const savedDataOfUser: any = await giveUserDataFromSqlDatabaseByEmail(
      userEmail
    );
    const { username, email } = savedDataOfUser;
    const dataForClient = { username, email };
    response.status(200).json({
      message: "Authentication Token Verification Complete.",
      data: dataForClient,
    });
  } catch (error: any) {
    console.log(error);
    // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------

    response.status(500).json({ message: error });
  }
};

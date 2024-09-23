import checkIfEmailAndPasswordMatchesWithAnyUserInDatabase from "../../../custom-functions-2/1/check-if-email-and-password-matches-with-any-user-in-database/checkIfEmailAndPasswordMatchesWithAnyUserInDatabase.js";
import giveAuthenticationToken from "../../../custom-functions/give-authentication-token/giveAuthenticationToken.js";
export const signInController = async (request, response) => {
    try {
        const receivedData = request.body;
        const { email, password } = receivedData;
        await checkIfEmailAndPasswordMatchesWithAnyUserInDatabase(email, password);
        const authenticatonToken = await giveAuthenticationToken(email);
        const dataForClient = {
            authenticatonToken,
            message: "Signed in Successful",
        };
        response.status(200).json(dataForClient);
    }
    catch (error) {
        console.log(error);
        // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------
        response.status(500).json({ message: error });
    }
};
//# sourceMappingURL=signIn.controller.js.map
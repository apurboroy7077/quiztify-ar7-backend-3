import { checkMyPasswordVersion2, } from "../../../custom-functions/password-hashing/hashingPassword.js";
import giveUserDataFromSqlDatabaseByEmail from "../give-user-data-from-sql-database-by-email/giveUserDataFromSqlDatabaseByEmail.js";
const checkIfEmailAndPasswordMatchesWithAnyUserInDatabase = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            const userData = await giveUserDataFromSqlDatabaseByEmail(email);
            const { hashed_password } = userData;
            await checkMyPasswordVersion2(password, hashed_password);
            resolve("User Verified Successfully");
        }
        catch (error) {
            console.log(error);
            reject(error);
        }
    });
};
export default checkIfEmailAndPasswordMatchesWithAnyUserInDatabase;
//
//# sourceMappingURL=checkIfEmailAndPasswordMatchesWithAnyUserInDatabase.js.map
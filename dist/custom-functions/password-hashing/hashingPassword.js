import bcrypt from "bcryptjs";
let saltRounds = 10;
let hashMyPassword = (plainPassword) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(plainPassword, saltRounds, (error, hashedPassword) => {
            if (error) {
                console.log(error);
                reject(error);
                return;
            }
            else {
                resolve(hashedPassword);
                return;
            }
        });
    });
};
let checkPassword = (plainPassword, hashedPassword) => {
    return new Promise((resolve, reject) => {
        let isMatch = bcrypt.compareSync(plainPassword, hashedPassword);
        resolve(isMatch);
    });
};
export const checkMyPasswordVersion2 = (plainPassword, hashedPassword) => {
    return new Promise(async (resolve, reject) => {
        try {
            let isMatch = bcrypt.compareSync(plainPassword, hashedPassword);
            if (isMatch) {
                resolve("Password Is Correct");
            }
            else {
                reject("Password Is Incorrect");
            }
        }
        catch (error) {
            console.log(error);
            reject(error);
        }
    });
};
export { bcrypt, hashMyPassword, checkPassword };
//# sourceMappingURL=hashingPassword.js.map
import mongoose from "mongoose";
import { quiztifyAR7DatabaseUrl, } from "../../data/archdune/variables/ArchduneVariables.js";
const connectDB = async () => {
    await mongoose
        .connect(quiztifyAR7DatabaseUrl)
        .then((response) => {
        console.log("Database is Connected");
    })
        .catch((error) => {
        console.log(error);
        setTimeout(() => {
            // connectDB();
        }, 3000);
    });
};
export { connectDB };
//
//# sourceMappingURL=connectDB.js.map
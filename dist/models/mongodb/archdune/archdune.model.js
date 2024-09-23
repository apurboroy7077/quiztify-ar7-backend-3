import mongoose from "mongoose";
const projectSchema = new mongoose.Schema({
    data: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
    },
});
export const projectsDataModelMongoDbMongoose = mongoose.model("trash2", projectSchema);
//
//# sourceMappingURL=archdune.model.js.map
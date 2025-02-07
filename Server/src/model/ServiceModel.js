import mongoose from "mongoose"

const DataSchema = mongoose.Schema(
    {
        icon: { type: String},
        title: { type: String},
        short: { type: String},
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const ServiceModel = mongoose.model("services", DataSchema)

export default ServiceModel;



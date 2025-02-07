import mongoose from "mongoose"

const DataSchema = mongoose.Schema(
    {
        id: { type: String},
        title: { type: String},
        image: { type: String},
        short: { type: String},
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const BlogModel = mongoose.model("blogs", DataSchema)

export default BlogModel;



import BlogModel from "../model/BlogModel.js";

export const blogService = async (req) => {
    try {
        let reqBody = req.body;
        let data = await BlogModel.create(reqBody);
        return { status : "Success", data : data}
    }catch (e) {
        return { status : "Error", error : e.toString()}

    }
}

export const getBlogService = async (req) => {
    try {

        let query = {};
        let projection = "id title image short";
        let data = await BlogModel.find(query, projection)
        return { status : "Success", data : data}

    } catch (e) {
        return { status : "Error", error : e.toString()}
    }
}
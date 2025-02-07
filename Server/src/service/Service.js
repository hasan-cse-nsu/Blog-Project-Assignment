import ServiceModel from "../model/ServiceModel.js";


export const postAllService = async (req) => {
    try {
        let reqBody = req.body;
        let data = await ServiceModel.create(reqBody);
        return { status : "Success", data : data}
    }catch (e) {
        return { status : "Error", error : e.toString()}

    }
}

export const getAllService = async (req) => {
    try {

        let query = {};
        let projection = "icon title short";
        let data = await ServiceModel.find(query, projection)
        return { status : "Success", data : data}

    } catch (e) {
        return { status : "Error", error : e.toString()}
    }
}
import { getAllService, postAllService } from "../service/Service.js";


export const postService = async (req, res) => {

    let result = await postAllService(req);
    return res.json({result})
}

export const getService= async (req, res)=>{
    
    let result = await getAllService(req);
    return res.json({result});
}
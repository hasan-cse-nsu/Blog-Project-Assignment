import { blogService, getBlogService } from "../service/BlogService.js";

export const postLatest = async (req, res) => {

    let result = await blogService(req);
    return res.json({result})
}

export const getAllBlogs= async (req, res)=>{
    
    let result = await getBlogService(req);
    return res.json({result});
}





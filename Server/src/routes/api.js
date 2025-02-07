import express from "express"
import * as BlogController from "../controllers/BlogController.js"
import * as TeamController from "../controllers/TeamController.js"
import * as ServiceController from "../controllers/ServiceController.js"

const router = express.Router();

router.post("/postLatest", BlogController.postLatest)
router.get("/getAllBlogs", BlogController.getAllBlogs)

router.post("/postTeamMember", TeamController.postTeamMember)
router.get("/getTeamMember", TeamController.getTeamMember)

router.post("/postService", ServiceController.postService)
router.get("/getService", ServiceController.getService)

export default router;
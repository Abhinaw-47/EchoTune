import {Router} from "express"
import { getAllStats } from "../controller/stat.controller.js"
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js"
const router=Router()
router.get('/',protectRoute,requireAdmin,getAllStats)


export default router
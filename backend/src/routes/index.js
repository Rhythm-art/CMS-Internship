import express from "express"
import authRoutes from "../module/auth/auth.routes.js"
import adminRoutes from "../module/auth/admin.routes.js"

const router = express.Router();

router.get("/health",(req,res)=>{
    return res.json({
        message:"cilnic managemnet system",
        success:true
    })
})
router.use("/auth",authRoutes)
router.use("/admin",adminRoutes)





export default router
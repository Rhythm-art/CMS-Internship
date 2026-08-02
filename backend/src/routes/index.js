import express from "express"

const routes = express.Router();

routes.get("/health", (req, res) => {
    return res.json({
        message: "Clinic Management System",
        success: true
    })
})





export default routes
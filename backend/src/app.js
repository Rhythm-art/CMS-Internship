import express from "express"
import routes from "./routes/index.js"





export const app = express();

app.use(express.json())  // (It is expree inbuild midleware fucntion)  // It is use to convert the http payload json into javascript object to understand the req.body


// api routes
app.use("/api", routes)





export default app

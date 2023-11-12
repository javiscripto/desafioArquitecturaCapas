import dotenv from "dotenv"

dotenv.config()
export default {
    PORT:process.env.PORT,
    mongoURL:process.env.mongoString,
}
import "dotenv/config"

import app from "./src/server/server.js";
import { connectDb } from "./src/dataBase/connectionDb.js";

const PORT = process.env.PORT;

async function startServer() {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT} 🟢`);
    });

    await connectDb()
}

startServer();
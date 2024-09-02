import app from "./src/server/server.js";
import "dotenv/config"

const PORT = process.env.PORT;

function startServer() {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT} 🟢`);
    });
}

startServer();
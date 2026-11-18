const sequalize = require("./config/database");
const app = require("./app");

const PORT = process.env.PORT || 5000;

async function startServer() {
    try {
        await sequalize.authenticate();
        console.log("Database connected successfully");

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });

    } catch (error) {
        console.error("Unable to connect to the database:", error);
        process.exit(1);
    }
}

startServer();
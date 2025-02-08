import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import { Server as SocketServer } from "socket.io";
import { initsocket } from "./sockets/chatSocket";
import { createServer } from "http";

import userRoutes from "./routes/user.routes";
import chatRoutes from "./routes/chat.routes";

dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();
const server = createServer(app);
const io = new SocketServer(server, {
  cors: { origin: "" },
});

app.use(cors());
app.use(helmet())
app.use(express.json());

app.use("/api/users", userRoutes)
app.use("/api/chats", chatRoutes)

initsocket(io);

server.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  // await db.connect(); // PostgreSQL Connection
});
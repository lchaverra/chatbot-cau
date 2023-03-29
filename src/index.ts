import { Server } from "./startup/Server";

const server = new Server();
server.configMiddleware();
server.configRoutes();
server.listen();

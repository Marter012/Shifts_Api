import express, { Express } from "express";
import authRouter from "../routes/auth";
import cors from "cors";
import { connectDB } from "../dataBase/DBConfig";

export class Server {
  app: Express;
  port: string | number | undefined;
  authPath: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.authPath = "/auth";

    this.connectionBD();
    this.middlewares();
    this.routes();
  }

  async connectionBD() : Promise<void>{
    await connectDB();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes(): void {
    this.app.use(this.authPath, authRouter);
  }

  listen(): void {
    this.app.listen(this.port, () => {
      console.log(`API TURNERO - PORT : ${this.port}`);
    });
  }
}

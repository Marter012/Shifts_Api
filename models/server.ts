import express, { Express } from "express";
import authRouterShifts from "../routes/authShifts";
import cors from "cors";
import { connectDB } from "../dataBase/DBConfig";

export class Server {
  app: Express;
  port: string | number | undefined;
  authPathShifts: string;
  authPathActivities: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.authPathShifts = "/authShifts";
    this.authPathActivities = "/authActivities";

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
    this.app.use(this.authPathShifts, authRouterShifts);
    this.app.use(this.authPathActivities, );
  }

  listen(): void {
    this.app.listen(this.port, () => {
      console.log(`API TURNERO - PORT : ${this.port}`);
    });
  }
}

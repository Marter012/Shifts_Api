"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const authShifts_1 = __importDefault(require("../routes/authShifts"));
const authActivities_1 = __importDefault(require("../routes/authActivities"));
const cors_1 = __importDefault(require("cors"));
const DBConfig_1 = require("../dataBase/DBConfig");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT;
        this.authPathShifts = "/authShifts";
        this.authPathActivities = "/authActivities";
        this.connectionBD();
        this.middlewares();
        this.routes();
    }
    connectionBD() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, DBConfig_1.connectDB)();
        });
    }
    middlewares() {
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
    }
    routes() {
        this.app.use(this.authPathShifts, authShifts_1.default);
        this.app.use(this.authPathActivities, authActivities_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`API TURNERO - PORT : ${this.port}`);
        });
    }
}
exports.Server = Server;

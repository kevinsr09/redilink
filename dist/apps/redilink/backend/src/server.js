"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const express_1 = __importStar(require("express"));
const helmet_1 = require("helmet");
const compression_1 = __importDefault(require("compression"));
const express_promise_router_1 = __importDefault(require("express-promise-router"));
const routes_1 = require("./routes");
const http_status_1 = __importDefault(require("http-status"));
const DomainError_1 = require("../../../../Context/redilink/shared/domain/DomainError");
class Server {
    constructor({ port }) {
        this.express = (0, express_1.default)();
        this.port = port;
        this.express.use((0, express_1.json)());
        this.express.use((0, express_1.urlencoded)({ extended: true }));
        this.express.use((0, helmet_1.xssFilter)());
        this.express.use((0, helmet_1.noSniff)());
        this.express.use((0, helmet_1.hidePoweredBy)());
        this.express.use((0, helmet_1.frameguard)({ action: 'deny' }));
        this.express.use((0, compression_1.default)());
        const router = (0, express_promise_router_1.default)();
        this.express.use(router);
        (0, routes_1.registerRoutes)(router);
        router.use((_err, _req, res, next) => {
            console.log(_err.message);
            if (_err instanceof DomainError_1.DomainError) {
                res.status(+http_status_1.default.BAD_REQUEST).send(_err.message);
                console.log({ message: _err.message, name: _err.name, stack: _err.stack });
                return;
            }
            res.status(+http_status_1.default.INTERNAL_SERVER_ERROR).send('Something went wrong!');
        });
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            yield new Promise((resolve, reject) => {
                this.server = this.express.listen(this.port, () => {
                    console.log(`Server listening on port ${this.port}`);
                    resolve();
                });
            });
        });
    }
    stop() {
        return __awaiter(this, void 0, void 0, function* () {
            yield new Promise((resolve, reject) => {
                if (this.server != null) {
                    this.server.close((err) => {
                        if (err != null) {
                            reject(err);
                        }
                        resolve();
                    });
                }
                resolve();
            });
        });
    }
}
exports.Server = Server;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envs_1 = require("./config/envs");
const server_1 = require("./server");
void new server_1.Server({ port: envs_1.envs.PORT }).listen();

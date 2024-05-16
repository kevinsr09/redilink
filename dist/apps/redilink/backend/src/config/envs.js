"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envs = void 0;
require("dotenv/config");
const env_var_1 = require("env-var");
exports.envs = {
    PORT: (0, env_var_1.get)('PORT').required().asPortNumber(),
    TURSO_AUTH_TOKEN: (0, env_var_1.get)('TURSO_AUTH_TOKEN').asString(),
    TURSO_DATABASE_URL: (0, env_var_1.get)('TURSO_DATABASE_URL').asString()
};

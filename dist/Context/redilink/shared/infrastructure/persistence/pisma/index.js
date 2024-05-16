"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const client_1 = require("@prisma/client");
const adapter_libsql_1 = require("@prisma/adapter-libsql");
const client_2 = require("@libsql/client");
const envs_1 = require("../../../../../../apps/redilink/backend/src/config/envs");
const libsql = (0, client_2.createClient)({
    url: `${envs_1.envs.TURSO_DATABASE_URL}`,
    authToken: `${envs_1.envs.TURSO_AUTH_TOKEN}`
});
const adapter = new adapter_libsql_1.PrismaLibSQL(libsql);
exports.prisma = new client_1.PrismaClient({ adapter });

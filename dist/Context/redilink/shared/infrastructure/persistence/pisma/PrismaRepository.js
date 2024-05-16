"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaRepository = void 0;
const _1 = require(".");
class PrismaRepository {
    constructor() {
        this.conn = _1.prisma;
    }
}
exports.PrismaRepository = PrismaRepository;

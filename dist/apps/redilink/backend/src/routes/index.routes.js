"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.prismaLinkRepository = void 0;
const PrismaLinkRepository_1 = require("../../../../../Context/redilink/shared/infrastructure/persistence/pisma/PrismaLinkRepository");
const dependency_injection_1 = require("../dependency-injection");
exports.prismaLinkRepository = new PrismaLinkRepository_1.PrismaLinkRepository();
const register = (router) => {
    router.get('/:short', dependency_injection_1.indexGetController.run.bind(dependency_injection_1.indexGetController));
};
exports.register = register;

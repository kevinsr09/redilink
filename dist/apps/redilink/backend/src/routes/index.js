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
exports.registerRoutes = exports.validateReqSchema = void 0;
const express_validator_1 = require("express-validator");
const glob_1 = require("glob");
const http_status_1 = __importDefault(require("http-status"));
const validateReqSchema = (validations) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        for (const validation of validations) {
            const result = yield validation.run(req);
            if (result.array().length > 0)
                break;
        }
        const errors = (0, express_validator_1.validationResult)(req);
        if (errors.isEmpty()) {
            next();
            return;
        }
        res.status(+http_status_1.default.BAD_REQUEST).json({ errors: errors.array() });
    });
};
exports.validateReqSchema = validateReqSchema;
function registerRoutes(router) {
    const routes = (0, glob_1.sync)(__dirname + '/**/*.routes.*');
    routes.forEach(route => { void register(route, router); });
}
exports.registerRoutes = registerRoutes;
const register = (routePath, router) => __awaiter(void 0, void 0, void 0, function* () {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const route = require(routePath);
    route.register(router);
    // const route: { register: (router: Router) => void } = await import(routePath)
    // route.register(router)
});

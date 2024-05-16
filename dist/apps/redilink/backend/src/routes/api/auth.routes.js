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
exports.register = void 0;
const express_validator_1 = require("express-validator");
const __1 = require("..");
const http_status_1 = __importDefault(require("http-status"));
const dependency_injection_1 = require("../../dependency-injection");
const reqSchema = [
    (0, express_validator_1.body)('email').isEmail().withMessage('Invalid email format'),
    (0, express_validator_1.body)('password').isString().isLength({ min: 6, max: 40 }).withMessage('Must be between 6 and 40 characters')
];
const register = (router) => {
    router.post('/api/auth', (0, __1.validateReqSchema)(reqSchema), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const email = req.body.email;
        const password = req.body.password;
        yield dependency_injection_1.userRegistrar.run(email, password);
        res.sendStatus(+http_status_1.default.CREATED);
    }));
};
exports.register = register;

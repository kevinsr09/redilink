"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const __1 = require("..");
const express_validator_1 = require("express-validator");
const LinkShort_1 = require("../../../../../../Context/redilink/Link/domain/LinkShort");
const dependency_injection_1 = require("../../dependency-injection");
const reqSchema = [
    (0, express_validator_1.body)('url').isURL().withMessage('Invalid URL'),
    (0, express_validator_1.body)('shorturl').optional().isString().isLength({ min: LinkShort_1.LinkShort.MIN_LENGTH, max: LinkShort_1.LinkShort.MAX_LENGTH }).withMessage(`Must be between ${LinkShort_1.LinkShort.MIN_LENGTH} and ${LinkShort_1.LinkShort.MAX_LENGTH} characters`)
];
const register = (router) => {
    router.get('/api/links/:short', dependency_injection_1.linkGetController.run.bind(dependency_injection_1.linkGetController));
    router.post('/api/links', (0, __1.validateReqSchema)(reqSchema), dependency_injection_1.linkPostController.run.bind(dependency_injection_1.linkPostController));
};
exports.register = register;

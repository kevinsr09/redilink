"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkShortInvalidFormat = void 0;
const DomainError_1 = require("../../shared/domain/DomainError");
class LinkShortInvalidFormat extends DomainError_1.DomainError {
    constructor() {
        super('Invalid format for short URL, only alphanumeric characters');
    }
}
exports.LinkShortInvalidFormat = LinkShortInvalidFormat;

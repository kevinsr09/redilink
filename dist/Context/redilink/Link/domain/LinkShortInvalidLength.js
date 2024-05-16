"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkShortInvalidLength = void 0;
const DomainError_1 = require("../../shared/domain/DomainError");
class LinkShortInvalidLength extends DomainError_1.DomainError {
    constructor() {
        super('Invalid length for short URL, must be between 3 and 7 characters');
    }
}
exports.LinkShortInvalidLength = LinkShortInvalidLength;

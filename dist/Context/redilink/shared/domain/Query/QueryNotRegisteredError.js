"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryNotRegisteredError = void 0;
const DomainError_1 = require("../DomainError");
class QueryNotRegisteredError extends DomainError_1.DomainError {
    constructor(query) {
        super(`The query <${query.constructor.name}> hasn't a query handler associated`);
    }
}
exports.QueryNotRegisteredError = QueryNotRegisteredError;

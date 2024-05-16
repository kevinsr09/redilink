"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindLinkQuery = void 0;
const Query_1 = require("../../../../../Context/redilink/shared/domain/Query/Query");
class FindLinkQuery extends Query_1.Query {
    constructor(short) {
        super();
        this.short = short;
    }
}
exports.FindLinkQuery = FindLinkQuery;

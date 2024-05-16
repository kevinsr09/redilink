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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkGetController = void 0;
const FindLinkQuery_1 = require("../../../../../../Context/redilink/Link/application/find/FindLinkQuery");
class LinkGetController {
    constructor(queryBus) {
        this.queryBus = queryBus;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const short = req.params.short;
            const { link } = yield this.queryBus.ask(new FindLinkQuery_1.FindLinkQuery(short));
            res.json(link);
        });
    }
}
exports.LinkGetController = LinkGetController;

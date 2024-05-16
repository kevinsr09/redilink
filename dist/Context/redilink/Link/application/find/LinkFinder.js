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
exports.LinkFinder = void 0;
const LinkNotExist_1 = require("../../domain/LinkNotExist");
const LinkShort_1 = require("../../domain/LinkShort");
class LinkFinder {
    constructor(repository) {
        this.repository = repository;
    }
    run(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const linkId = new LinkShort_1.LinkShort(id);
            const link = yield this.repository.search(linkId);
            if (link == null) {
                throw new LinkNotExist_1.LinkNotExist('Link not found');
            }
            return link;
        });
    }
}
exports.LinkFinder = LinkFinder;

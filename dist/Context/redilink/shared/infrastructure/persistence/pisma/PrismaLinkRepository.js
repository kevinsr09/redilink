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
exports.PrismaLinkRepository = void 0;
const PrismaRepository_1 = require("./PrismaRepository");
const Link_1 = require("../../../../../../Context/redilink/Link/domain/Link");
class PrismaLinkRepository extends PrismaRepository_1.PrismaRepository {
    save(link) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.conn.link.create({
                data: {
                    short: link.short,
                    original: link.original
                }
            });
        });
    }
    search(short) {
        return __awaiter(this, void 0, void 0, function* () {
            const link = yield this.conn.link.findUnique({ where: { short: short.value } });
            if (link == null) {
                return null;
            }
            return Link_1.Link.fromPrimitives(link);
        });
    }
}
exports.PrismaLinkRepository = PrismaLinkRepository;

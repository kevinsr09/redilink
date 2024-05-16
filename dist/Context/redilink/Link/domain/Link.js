"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
const LinkOriginal_1 = require("./LinkOriginal");
const LinkShort_1 = require("./LinkShort");
class Link {
    constructor(original, short) {
        this._original = LinkOriginal_1.LinkOriginal.create(original);
        this._short = (short != null) ? new LinkShort_1.LinkShort(short) : LinkShort_1.LinkShort.random();
    }
    static create(original, short) {
        return new Link(original, short);
    }
    get original() {
        return this._original.value;
    }
    get short() {
        return this._short.value;
    }
    static fromPrimitives({ original, short }) {
        return new Link(original, short);
    }
    toString() {
        return JSON.stringify({ original: this.original, short: this.short });
    }
}
exports.Link = Link;

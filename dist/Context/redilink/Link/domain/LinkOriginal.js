"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkOriginal = void 0;
const ValueObject_1 = require("../../shared/domain/value-object/ValueObject");
class LinkOriginal extends ValueObject_1.ValueObject {
    constructor(value) {
        super(value);
        this.patronURL = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})(:[0-9]{1,5})?(\/[\w/.-]*)*(\?[^\s]*)?$/;
        this.ensureIsValidUrl(value);
    }
    static create(value) {
        return new LinkOriginal(value);
    }
    ensureIsValidUrl(value) {
        if (!this.patronURL.test(value)) {
            throw new Error('Invalid URL');
        }
    }
}
exports.LinkOriginal = LinkOriginal;

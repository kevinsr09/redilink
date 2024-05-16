"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkShort = void 0;
const ValueObject_1 = require("../../shared/domain/value-object/ValueObject");
const LinkShortInvalidFormat_1 = require("./LinkShortInvalidFormat");
const LinkShortInvalidLength_1 = require("./LinkShortInvalidLength");
class LinkShort extends ValueObject_1.ValueObject {
    constructor(value) {
        super(value);
        this.pattern = /^[a-zA-Z0-9]+$/;
        this.ensureIsValidLinkShort(value);
    }
    static random() {
        return new LinkShort(Math.random().toString(36).substring(LinkShort.MIN_LENGTH, LinkShort.MAX_LENGTH));
    }
    ensureIsValidLinkShort(value) {
        this.ensureIsValidFormat(value);
        this.ensureLengthIsValid(value);
    }
    ensureIsValidFormat(value) {
        if (!this.pattern.test(value)) {
            throw new LinkShortInvalidFormat_1.LinkShortInvalidFormat();
        }
    }
    ensureLengthIsValid(value) {
        if (value.length > LinkShort.MAX_LENGTH || value.length < LinkShort.MIN_LENGTH) {
            throw new LinkShortInvalidLength_1.LinkShortInvalidLength();
        }
    }
}
exports.LinkShort = LinkShort;
LinkShort.MAX_LENGTH = 10;
LinkShort.MIN_LENGTH = 3;

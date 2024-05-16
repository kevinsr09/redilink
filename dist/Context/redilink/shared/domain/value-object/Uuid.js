"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Uuid = void 0;
const uuid_1 = require("uuid");
const ValueObject_1 = require("./ValueObject");
const InvalidArgumentError_1 = require("./InvalidArgumentError");
class Uuid extends ValueObject_1.ValueObject {
    constructor(value) {
        super(value);
        this.ensureIsValidUuid(value);
    }
    static random() {
        return new Uuid((0, uuid_1.v4)());
    }
    ensureIsValidUuid(id) {
        if (!(0, uuid_1.validate)(id)) {
            throw new InvalidArgumentError_1.InvalidArgumentError(`value '${id}' is not a valid uuid`);
        }
    }
}
exports.Uuid = Uuid;

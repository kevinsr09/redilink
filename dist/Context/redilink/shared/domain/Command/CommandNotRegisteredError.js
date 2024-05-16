"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandNotRegisteredError = void 0;
const DomainError_1 = require("../DomainError");
class CommandNotRegisteredError extends DomainError_1.DomainError {
    constructor(command) {
        super(`The command <${command.constructor.name}> hasn't a command handler associated`);
    }
}
exports.CommandNotRegisteredError = CommandNotRegisteredError;

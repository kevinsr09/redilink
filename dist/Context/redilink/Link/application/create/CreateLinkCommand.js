"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLinkCommand = void 0;
const Command_1 = require("../../../../../Context/redilink/shared/domain/Command/Command");
class CreateLinkCommand extends Command_1.Command {
    constructor({ original, short }) {
        super();
        this.original = original;
        this.short = short;
    }
}
exports.CreateLinkCommand = CreateLinkCommand;

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
exports.AuthUser = void 0;
const BcryptEncryptor_1 = require("../../shared/infrastructure/adapters/BcryptEncryptor");
const AuthEmail_1 = require("./AuthEmail");
const AuthPassword_1 = require("./AuthPassword");
class AuthUser {
    constructor(email, password) {
        this._email = new AuthEmail_1.AuthEmail(email);
        this._password = password;
    }
    static create(email, password, encryptor = new BcryptEncryptor_1.BcryptEncryptor()) {
        return new AuthUser(email, encryptor.encrypt(new AuthPassword_1.AuthPassword(password).value));
    }
    passwordMatch(password, encryptor = new BcryptEncryptor_1.BcryptEncryptor()) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield encryptor.compare(password.value, this.password);
        });
    }
    get email() {
        return this._email.value;
    }
    get password() {
        return this._password;
    }
    static toPrimitives(user) {
        return {
            email: user.email,
            password: user.password
        };
    }
    static fromPrimitives({ email, password }) {
        return new AuthUser(email, password);
    }
}
exports.AuthUser = AuthUser;

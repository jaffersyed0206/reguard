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
exports.fetchUser = exports.deleteUser = exports.updateUser = exports.createUser = void 0;
const database_1 = require("../database/database");
const models_1 = require("./models");
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield database_1.usersTable.insert(user).select();
    if (error)
        throw error;
    return Object.assign(new models_1.Users(), data[0]);
});
exports.createUser = createUser;
const updateUser = (updates, id) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield database_1.usersTable.update(updates).eq('id', id).select();
    if (error)
        throw error;
    return Object.assign(new models_1.Users(), data[0]);
});
exports.updateUser = updateUser;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = yield database_1.usersTable.delete().eq('id', id);
    if (error)
        throw error;
});
exports.deleteUser = deleteUser;
const fetchUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield database_1.usersTable.select().eq('id', id);
    if (error)
        throw error;
    return Object.assign(new models_1.Users(), data[0]);
});
exports.fetchUser = fetchUser;

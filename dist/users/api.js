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
const express_1 = require("express");
const functions_1 = require("./functions");
const models_1 = require("./models");
const userRouter = (0, express_1.Router)();
userRouter.post('', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = Object.assign(new models_1.CreateUser(), req.body);
    const response = yield (0, functions_1.createUser)(newUser);
    res.json(response);
}));
userRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, functions_1.fetchUser)(parseInt(req.params.id));
    res.json(response);
}));
userRouter.patch('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, functions_1.updateUser)(req.body, parseInt(req.params.id));
    res.json(response);
}));
userRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, functions_1.deleteUser)(parseInt(req.params.id));
    res.sendStatus(200);
}));
exports.default = userRouter;

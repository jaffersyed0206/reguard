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
const model_1 = require("./model");
const backfill_1 = require("../backfill/backfill");
const productRouter = (0, express_1.Router)();
productRouter.post('', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newProduct = Object.assign(new model_1.CreateProducts(), req.body);
    const response = yield (0, functions_1.createProduct)(newProduct);
    res.json(response);
}));
productRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, functions_1.fetchProduct)(parseInt(req.params.id));
    res.json(response);
}));
productRouter.patch('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, functions_1.updateProduct)(req.body, parseInt(req.params.id));
    res.json(response);
}));
productRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, functions_1.deleteProduct)(parseInt(req.params.id));
    res.sendStatus(200);
}));
productRouter.get('/backfill', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, backfill_1.authenticDataBackfill)();
    res.sendStatus(200);
}));
exports.default = productRouter;

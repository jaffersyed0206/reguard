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
const purchasesRouter = (0, express_1.Router)();
purchasesRouter.post('', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newPurchase = Object.assign(new model_1.CreatePurchase(), req.body);
    const response = yield (0, functions_1.createPurchase)(newPurchase);
    res.json(response);
}));
purchasesRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, functions_1.fetchPurchases)(parseInt(req.params.id));
    res.json(response);
}));
purchasesRouter.patch('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, functions_1.updatePurchase)(req.body, parseInt(req.params.id));
    res.json(response);
}));
purchasesRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, functions_1.deletePurchase)(parseInt(req.params.id));
    res.sendStatus(200);
}));
purchasesRouter.get('/user/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, functions_1.fetchUserPurchases)(parseInt(req.params.id));
    res.json(response);
}));
purchasesRouter.get('/most_valuable_customer', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, functions_1.findMostValuableCustomer)();
    res.json(response);
}));
purchasesRouter.get('/most_popular_product', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, functions_1.findMostPopularProduct)();
    res.json(response);
}));
exports.default = purchasesRouter;

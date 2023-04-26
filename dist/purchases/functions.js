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
exports.findMostValuableCustomer = exports.findMostPopularProduct = exports.fetchUserPurchases = exports.fetchPurchases = exports.deletePurchase = exports.updatePurchase = exports.createPurchase = void 0;
const database_1 = require("../database/database");
const model_1 = require("./model");
const _ = require("lodash");
const functions_1 = require("../products/functions");
const functions_2 = require("../users/functions");
const createPurchase = (purchase) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield database_1.purchasesTable.insert(purchase).select();
    if (error)
        throw error;
    return Object.assign(new model_1.Purchases(), data[0]);
});
exports.createPurchase = createPurchase;
const updatePurchase = (updates, id) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield database_1.purchasesTable.update(updates).eq('id', id).select();
    if (error)
        throw error;
    return Object.assign(new model_1.Purchases(), data[0]);
});
exports.updatePurchase = updatePurchase;
const deletePurchase = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = yield database_1.purchasesTable.delete().eq('id', id);
    if (error)
        throw error;
});
exports.deletePurchase = deletePurchase;
const fetchPurchases = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield database_1.purchasesTable.select().eq('id', id);
    if (error)
        throw error;
    return Object.assign(new model_1.Purchases(), data[0]);
});
exports.fetchPurchases = fetchPurchases;
const fetchUserPurchases = (user_id) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield database_1.purchasesTable.select(`*, products(*)`).eq('user_id', user_id);
    if (error)
        throw error;
    return data.map((purchase) => Object.assign(new model_1.Purchases(), purchase));
});
exports.fetchUserPurchases = fetchUserPurchases;
const findMostPopularProduct = () => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield database_1.purchasesTable.select(`*`);
    if (error)
        throw error;
    const productIds = data.map((purchase) => purchase.product_id);
    const mostPopularProductId = _.chain(productIds)
        .countBy()
        .toPairs()
        .maxBy(_.last)
        .head()
        .parseInt()
        .value();
    return (0, functions_1.fetchProduct)(mostPopularProductId);
});
exports.findMostPopularProduct = findMostPopularProduct;
const findMostValuableCustomer = () => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield database_1.purchasesTable.select(`*`);
    if (error)
        throw error;
    const userIds = data.map((purchase) => purchase.user_id);
    const mostValuableCustomerId = _.chain(userIds)
        .countBy()
        .toPairs()
        .maxBy(_.last)
        .head()
        .parseInt()
        .value();
    return (0, functions_2.fetchUser)(mostValuableCustomerId);
});
exports.findMostValuableCustomer = findMostValuableCustomer;

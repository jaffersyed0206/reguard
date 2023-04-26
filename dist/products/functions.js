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
exports.fetchProduct = exports.deleteProduct = exports.updateProduct = exports.createProduct = void 0;
const database_1 = require("../database/database");
const model_1 = require("./model");
const createProduct = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield database_1.productsTable.insert(product).select();
    if (error)
        throw error;
    return Object.assign(new model_1.Products(), data[0]);
});
exports.createProduct = createProduct;
const updateProduct = (updates, id) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield database_1.productsTable.update(updates).eq('id', id).select();
    if (error)
        throw error;
    return Object.assign(new model_1.Products(), data[0]);
});
exports.updateProduct = updateProduct;
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = yield database_1.productsTable.delete().eq('id', id);
    if (error)
        throw error;
});
exports.deleteProduct = deleteProduct;
const fetchProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield database_1.productsTable.select().eq('id', id);
    if (error)
        throw error;
    return Object.assign(new model_1.Products(), data[0]);
});
exports.fetchProduct = fetchProduct;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPurchase = exports.Purchases = exports.CreatePurchase = void 0;
const model_1 = require("../products/model");
class CreatePurchase {
    constructor(user_id = 0, product_id = 0) {
        this.user_id = user_id;
        this.product_id = product_id;
    }
    getUserId() {
        return this.user_id;
    }
    setUserId(user_id) {
        this.user_id = user_id;
    }
    getProductId() {
        return this.product_id;
    }
    setProductId(product_id) {
        this.product_id = product_id;
    }
}
exports.CreatePurchase = CreatePurchase;
class Purchases {
    constructor(id = 0, user_id = 0, product_id = 0) {
        this.id = id;
        this.user_id = user_id;
        this.product_id = product_id;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getUserId() {
        return this.user_id;
    }
    getProductId() {
        return this.product_id;
    }
    setProductId(product_id) {
        this.product_id = product_id;
    }
}
exports.Purchases = Purchases;
class UserPurchase {
    constructor(id = 0, user_id = 0, product_id = 0, product = new model_1.Products()) {
        this.id = id;
        this.user_id = user_id;
        this.product_id = product_id;
        this.product = product;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getUserId() {
        return this.user_id;
    }
    getProductId() {
        return this.product_id;
    }
    setProductId(product_id) {
        this.product_id = product_id;
    }
    getProduct() {
        return this.product;
    }
}
exports.UserPurchase = UserPurchase;

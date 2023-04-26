"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = exports.CreateProducts = void 0;
class CreateProducts {
    constructor(name = "", metal_type = "", price = 0, stone_type = "", customizable = false) {
        this.name = name;
        this.metal_type = metal_type;
        this.price = price;
        this.stone_type = stone_type;
        this.customizable = customizable;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getMetalType() {
        return this.metal_type;
    }
    setMetalType(metal_type) {
        this.metal_type = metal_type;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
    getStoneType() {
        return this.stone_type;
    }
    setStoneType(stone_type) {
        this.stone_type = stone_type;
    }
    getCustomizable() {
        return this.customizable;
    }
    setCustomizable(customizable) {
        this.customizable = customizable;
    }
}
exports.CreateProducts = CreateProducts;
class Products {
    constructor(id = 0, name = "", metal_type = "", price = 0, stone_type = "", customizable = false, created_at = new Date()) {
        this.id = id;
        this.name = name;
        this.metal_type = metal_type;
        this.price = price;
        this.stone_type = stone_type;
        this.customizable = customizable;
        this.created_at = created_at;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getMetalType() {
        return this.metal_type;
    }
    setMetalType(metal_type) {
        this.metal_type = metal_type;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
    getStoneType() {
        return this.stone_type;
    }
    setStoneType(stone_type) {
        this.stone_type = stone_type;
    }
    getCustomizable() {
        return this.customizable;
    }
    setCustomizable(customizable) {
        this.customizable = customizable;
    }
    getCreatedAt() {
        return this.created_at;
    }
    setCreatedAt(created_at) {
        this.created_at = created_at;
    }
}
exports.Products = Products;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserData = exports.Users = exports.CreateUser = void 0;
const model_1 = require("../purchases/model");
class CreateUser {
    constructor(first_name = "", last_name = "", email = "", gender = "") {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.gender = gender;
    }
    getFirstName() {
        return this.first_name;
    }
    setFirstName(first_name) {
        this.first_name = first_name;
    }
    getLastName() {
        return this.last_name;
    }
    setLastName(last_name) {
        this.last_name = last_name;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    getGender() {
        return this.gender;
    }
    setGender(gender) {
        this.gender = gender;
    }
}
exports.CreateUser = CreateUser;
class Users {
    constructor(id = 0, first_name = "", last_name = "", email = "", created_at = new Date(), gender = "male") {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.created_at = created_at;
        this.gender = gender;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getFirstName() {
        return this.first_name;
    }
    setFirstName(first_name) {
        this.first_name = first_name;
    }
    getLastName() {
        return this.last_name;
    }
    setLastName(last_name) {
        this.last_name = last_name;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    getCreatedAt() {
        return this.created_at;
    }
    setCreatedAt(created_at) {
        this.created_at = created_at;
    }
    getGender() {
        return this.gender;
    }
    setGender(gender) {
        this.gender = gender;
    }
}
exports.Users = Users;
class UserData {
    constructor(id = 0, first_name = "", last_name = "", email = "", created_at = new Date(), purchases = [new model_1.Purchases()]) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.created_at = created_at;
        this.purchases = purchases;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getFirstName() {
        return this.first_name;
    }
    setFirstName(first_name) {
        this.first_name = first_name;
    }
    getLastName() {
        return this.last_name;
    }
    setLastName(last_name) {
        this.last_name = last_name;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    getCreatedAt() {
        return this.created_at;
    }
    setCreatedAt(created_at) {
        this.created_at = created_at;
    }
    getPurchases() {
        return this.purchases;
    }
    setPurchases(purchases) {
        this.purchases = purchases;
    }
}
exports.UserData = UserData;

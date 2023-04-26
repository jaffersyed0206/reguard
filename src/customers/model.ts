import { Model } from "sequelize";
import { DataType } from "sequelize-typescript";
import REGUARD_DB from "../database/database";

class CustomersModel extends Model {}

CustomersModel.init({
    id: {
        type: DataType.STRING,
        primaryKey: true,
        allowNull: false,
    },
    firstName: {
        type: DataType.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataType.STRING,
        allowNull: false,
    },
    createdAt: {
        type: DataType.STRING,
        allowNull: false,
    },
    updatedAt: {
        type: DataType.STRING,
        allowNull: false,
    },
}, {
    sequelize: REGUARD_DB,
    tableName: "customers",
    modelName: "customers",
    timestamps: false
});


export class Customers {
    constructor(
        id: string = "",
        firstName: string = "",
        lastName: string = "",
        createdAt: string = "",
        updatedAt: string = "",
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    id: string;
    firstName: string;
    lastName: string;
    createdAt: string;
    updatedAt: string;

    public getId(): string {
        return this.id;
    }   

    public getFirstName(): string {
        return this.firstName;
    }

    public getLastName(): string {
        return this.lastName;
    }

    public getCreatedAt(): string {
        return this.createdAt;
    }

    public getUpdatedAt(): string {
        return this.updatedAt;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public setFirstName(firstName: string): void {
        this.firstName = firstName;
    }

    public setLastName(lastName: string): void {
        this.lastName = lastName;
    }

    public setCreatedAt(createdAt: string): void {
        this.createdAt = createdAt;
    }

    public setUpdatedAt(updatedAt: string): void {
        this.updatedAt = updatedAt;
    }
}

export default CustomersModel;
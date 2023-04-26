import { Model } from "sequelize";
import { DataType } from "sequelize-typescript";
import REGUARD_DB from "../database/database";

class ClaimsModel extends Model {}

ClaimsModel.init({
    id: {
        type: DataType.STRING,
        primaryKey: true,
        allowNull: false,
    },
    status: {
        type: DataType.STRING,
        allowNull: false,
    },
    solution: {
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
    customerId: {
        type: DataType.STRING,
        allowNull: false,
    },
    productPurchaseId: {
        type: DataType.STRING,
        allowNull: false,
    },
    productCondition: {
        type: DataType.STRING,
        allowNull: false,
    },
    damageDescription: {
        type: DataType.STRING,
        allowNull: false,
    },
    damageDate: {
        type: DataType.STRING,
        allowNull: false,
    },
}, {
    sequelize: REGUARD_DB,
    tableName: "claims",
    modelName: "claims",
    timestamps: false
});


export class Claims {
    constructor(
        id: string = "",
        status: string = "",
        solution: string = "",
        createdAt: string = "",
        updatedAt: string = "",
        customerId: string = "",
        productPurchaseId: string = "",
        productCondition: string = "",
        damageDescription: string = "",
        damageDate: string = "",
    ) {
        this.id = id;
        this.status = status;
        this.solution = solution;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.customerId = customerId;
        this.productPurchaseId = productPurchaseId;
        this.productCondition = productCondition;
        this.damageDescription = damageDescription;
        this.damageDate = damageDate;
    }

    public id: string;
    public status: string;
    public solution: string;
    public createdAt: string;
    public updatedAt: string;
    public customerId: string;
    public productPurchaseId: string;
    public productCondition: string;
    public damageDescription: string;
    public damageDate: string;

    public getId(): string {
        return this.id;
    }       

    public getStatus(): string {
        return this.status;
    }

    public getSolution(): string {
        return this.solution;
    }

    public getCreatedAt(): string {
        return this.createdAt;
    }

    public getUpdatedAt(): string {
        return this.updatedAt;
    }

    public getCustomerId(): string {
        return this.customerId;
    }

    public getProductPurchaseId(): string {
        return this.productPurchaseId;
    }

    public getProductCondition(): string {
        return this.productCondition;
    }

    public getDamageDescription(): string {
        return this.damageDescription;
    }

    public getDamageDate(): string {
        return this.damageDate;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public setStatus(status: string): void {
        this.status = status;
    }

    public setSolution(solution: string): void {
        this.solution = solution;
    }

    public setCreatedAt(createdAt: string): void {
        this.createdAt = createdAt;
    }

    public setUpdatedAt(updatedAt: string): void {
        this.updatedAt = updatedAt;
    }

    public setCustomerId(customerId: string): void {
        this.customerId = customerId;
    }

    public setProductPurchaseId(productPurchaseId: string): void {
        this.productPurchaseId = productPurchaseId;
    }

    public setProductCondition(productCondition: string): void {
        this.productCondition = productCondition;
    }

    public setDamageDescription(damageDescription: string): void {
        this.damageDescription = damageDescription;
    }

    public setDamageDate(damageDate: string): void {
        this.damageDate = damageDate;
    }
}

export default ClaimsModel;
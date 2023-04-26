import { Model } from "sequelize";
import { DataType } from "sequelize-typescript";
import REGUARD_DB from "../database/database";

class PurchasesModel extends Model {}

PurchasesModel.init({
    id: {
        type: DataType.STRING,
        primaryKey: true,
        allowNull: false,
    },
    invoice: {
        type: DataType.STRING,
        allowNull: false,
    },
    totalSaleAmount: {
        type: DataType.STRING,
        allowNull: false,
    },
    invoiceDate: {
        type: DataType.STRING,
        allowNull: false,
    },
    deliveryDate: {
        type: DataType.STRING,
        allowNull: false,
    },
    name: {
        type: DataType.STRING,
        allowNull: false,
    },
    description: {
        type: DataType.STRING,
        allowNull: false,
    },
    sku: {
        type: DataType.STRING,
        allowNull: false,
    },
    protectionPlanName: {
        type: DataType.STRING,
        allowNull: false,
    },
    protectionPlanDuration: {
        type: DataType.STRING,
        allowNull: false,
    },
    protectionPlanPrice: {
        type: DataType.STRING,
        allowNull: false,
    },
    protectionPlanSku: {
        type: DataType.STRING,
        allowNull: false,
    },
    protectionPlanPeriod: {
        type: DataType.STRING,
        allowNull: false,
    },
    customerId: {
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
    tableName: "purchases",
    modelName: "purchases",
    timestamps: false
});

export class Purchases {
    constructor(
        id: string = "",
        invoice: string = "",
        totalSaleAmount: string = "",
        invoiceDate: string = "",
        deliveryDate: string = "",
        name: string = "",
        description: string = "",
        sku: string = "",
        protectionPlanName: string = "",
        protectionPlanDuration: string = "",
        protectionPlanPrice: string = "",
        protectionPlanSku: string = "",
        protectionPlanPeriod: string = "",
        customerId: string = "",
        createdAt: string = "",
        updatedAt: string = ""
    ) { 
        this.id = id;
        this.invoice = invoice;
        this.totalSaleAmount = totalSaleAmount;
        this.invoiceDate = invoiceDate;
        this.deliveryDate = deliveryDate;
        this.name = name;
        this.description = description;
        this.sku = sku;
        this.protectionPlanName = protectionPlanName;
        this.protectionPlanDuration = protectionPlanDuration;
        this.protectionPlanPrice = protectionPlanPrice;
        this.protectionPlanSku = protectionPlanSku;
        this.protectionPlanPeriod = protectionPlanPeriod;
        this.customerId = customerId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    id: string;
    invoice: string;
    totalSaleAmount: string;
    invoiceDate: string;
    deliveryDate: string;
    name: string;
    description: string;
    sku: string;
    protectionPlanName: string;
    protectionPlanDuration: string;
    protectionPlanPrice: string;
    protectionPlanSku: string;
    protectionPlanPeriod: string;
    customerId: string;
    createdAt: string;
    updatedAt: string;

    public getId(): string {
        return this.id;
    }

    public getInvoice(): string {
        return this.invoice;
    }

    public getTotalSaleAmount(): string {
        return this.totalSaleAmount;
    }

    public getInvoiceDate(): string {
        return this.invoiceDate;
    }

    public getDeliveryDate(): string {
        return this.deliveryDate;
    }

    public getName(): string {
        return this.name;
    }

    public getDescription(): string {
        return this.description;
    }

    public getSku(): string {
        return this.sku;
    }

    public getProtectionPlanName(): string {
        return this.protectionPlanName;
    }

    public getProtectionPlanDuration(): string {
        return this.protectionPlanDuration;
    }

    public getProtectionPlanPrice(): string {
        return this.protectionPlanPrice;
    }

    public getProtectionPlanSku(): string {
        return this.protectionPlanSku;
    }

    public getProtectionPlanPeriod(): string {
        return this.protectionPlanPeriod;
    }

    public getCustomerId(): string {
        return this.customerId;
    }

    public getCreatedAt(): string {
        return this.createdAt;
    }

    public getUpdatedAt(): string {
        return this.updatedAt;
    }
}

export default PurchasesModel;
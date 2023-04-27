import * as dotenv from 'dotenv'
import { Sequelize } from 'sequelize-typescript';
import { Model } from "sequelize";
import { DataType } from "sequelize-typescript";
dotenv.config()

// connection params to the users Schema
const HOST: string = process.env.HOST || "HOST";
const USER: string = process.env.DB_USER || "USER";
const PASSWORD: string = process.env.PASSWORD || "PASSWORD";
const PORT: number = 5432;
const DATABASE: string = process.env.DATABASE || "DATABASE";

const REGUARD_DB = new Sequelize({
    host: HOST,
    username: USER,
    password: PASSWORD,
    port: PORT,
    database: DATABASE,
    dialect: 'postgres',
})

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

describe("DB TESTS", () => {
    test('Check Count Data', async() => {
        const claims = await ClaimsModel.findAll()
        const purchases = await PurchasesModel.findAll()
        const customers = await CustomersModel.findAll()
        const response = {
            claims: {
                count: claims.length
            },
            purchases: {
                count: purchases.length
            },
            customers: {
                count: customers.length
            }
        }
    
        const expected = {
            claims: {
                count: 200
            },
            purchases: {
                count: 400
            },
            customers: {
                count: 100
            }
        }
        expect(response).toStrictEqual(expected)
    })
})
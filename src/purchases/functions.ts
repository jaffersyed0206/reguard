import PurchasesModel, { Purchases } from "./models"

export type CreatePurchase = {
    id: string
    invoice: string
    totalSaleAmount: string
    invoiceDate: string
    deliveryDate: string
    name: string
    description: string
    sku: string
    protectionPlanName: string
    protectionPlanDuration: string
    protectionPlanPrice: string
    protectionPlanSku: string
    protectionPlanPeriod: string
    customerId: string
    createdAt: string
    updatedAt: string
}


export const createPurchase = async (purchase: CreatePurchase): Promise<Purchases> => {
    try {
        const createdPurchase: PurchasesModel = await PurchasesModel.create(purchase)
        return new Purchases(
            createdPurchase.get().id,
            createdPurchase.get().invoice,
            createdPurchase.get().totalSaleAmount,
            createdPurchase.get().invoiceDate,
            createdPurchase.get().deliveryDate,
            createdPurchase.get().name,
            createdPurchase.get().description,
            createdPurchase.get().sku,
            createdPurchase.get().protectionPlanName,
            createdPurchase.get().protectionPlanDuration,
            createdPurchase.get().protectionPlanPrice,
            createdPurchase.get().protectionPlanSku,
            createdPurchase.get().protectionPlanPeriod,
            createdPurchase.get().customerId,
            createdPurchase.get().createdAt,
            createdPurchase.get().updatedAt,
        )
    } catch (error) {
        // Logging Error
        throw error
    }
}

export const findPurchase = async (id: string): Promise<Purchases> => {
    try {
        const foundPurchase: PurchasesModel | null = await PurchasesModel.findOne({ where: { id } })
        if (!foundPurchase) {
            throw new Error("Purchase not found")
        }

        return new Purchases(
            foundPurchase.get().id,
            foundPurchase.get().invoice,
            foundPurchase.get().totalSaleAmount,
            foundPurchase.get().invoiceDate,
            foundPurchase.get().deliveryDate,
            foundPurchase.get().name,
            foundPurchase.get().description,
            foundPurchase.get().sku,
            foundPurchase.get().protectionPlanName,
            foundPurchase.get().protectionPlanDuration,
            foundPurchase.get().protectionPlanPrice,
            foundPurchase.get().protectionPlanSku,
            foundPurchase.get().protectionPlanPeriod,
            foundPurchase.get().customerId,
            foundPurchase.get().createdAt,
            foundPurchase.get().updatedAt,
        )
    } catch (error) {
        throw error
    }
}

export type UpdatePurchase = {
    invoice?: string
    totalSaleAmount?: string
    invoiceDate?: string
    deliveryDate?: string
    name?: string
    description?: string
    sku?: string
    protectionPlanName?: string
    protectionPlanDuration?: string
    protectionPlanPrice?: string
    protectionPlanSku?: string
    protectionPlanPeriod?: string
    customerId?: string
}

export const updatePurchase = async (id: string, purchase: CreatePurchase): Promise<Purchases> => {
    try {
        await PurchasesModel.update(purchase, { where: { id } })
        return findPurchase(id)
    } catch (error) {
        throw error
    }
}

export const deletePurchase = async (id: string): Promise<void> => {
    try {
        await PurchasesModel.destroy({ where: { id } })
    } catch (error) {
        throw error
    }
}

export const getAllPurchases = async (): Promise<Purchases[]> => {
    try {
        const purchases = await PurchasesModel.findAll()
        return purchases.map((purchase: PurchasesModel) => {
            return new Purchases(
                purchase.get().id,
                purchase.get().invoice,
                purchase.get().totalSaleAmount,
                purchase.get().invoiceDate,
                purchase.get().deliveryDate,
                purchase.get().name,
                purchase.get().description,
                purchase.get().sku,
                purchase.get().protectionPlanName,
                purchase.get().protectionPlanDuration,
                purchase.get().protectionPlanPrice,
                purchase.get().protectionPlanSku,
                purchase.get().protectionPlanPeriod,
                purchase.get().customerId,
                purchase.get().createdAt
            )
        })
    } catch (error) {
        throw error
    }
}
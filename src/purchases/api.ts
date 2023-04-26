import { Router } from 'express'
import { backfill } from '../backfill/backfill';
import { createPurchase, deletePurchase, findPurchase, getAllPurchases, updatePurchase } from './functions';

const purchasesRouter = Router();

purchasesRouter.get('/backfill', async(req, res) => {
    try {
        const backfillData: any[] = await backfill('./src/reguard-challenge-data/purchases.csv')
        backfillData.forEach(async(purchase: any) => {
            const requestPurchase = {
                id: purchase.id,
                invoice: purchase.invoice,
                totalSaleAmount: purchase.totalSaleAmount,
                invoiceDate: purchase.invoiceDate,
                deliveryDate: purchase.deliveryDate,
                name: purchase.name,
                description: purchase.description,
                sku: purchase.sku,
                protectionPlanName: purchase.protectionPlanName,
                protectionPlanDuration: purchase.protectionPlanDuration,
                protectionPlanPrice: purchase.protectionPlanPrice,
                protectionPlanSku: purchase.protectionPlanSku,
                protectionPlanPeriod: purchase.protectionPlanPeriod,
                customerId: purchase.customerId,
                createdAt: purchase.createdAt,
                updatedAt: purchase.updatedAt,
            }
            await createPurchase(requestPurchase)
        })

        res.sendStatus(200)
    } catch (error) {
        res.status(500).json({error})
    }
});

purchasesRouter.get('/:id', async(req, res) => {
    try {
        const purchase = await findPurchase(req.params.id)
        res.status(200).json(purchase)
    } catch (error) {
        res.status(500).json({error})
    }
})

purchasesRouter.delete('/:id', async(req, res) => {
    try {
        await deletePurchase(req.params.id)
        res.sendStatus(200)
    } catch (error) {
        res.status(500).json({error})
    }
})

purchasesRouter.patch('/:id', async(req, res) => {
    try {
        const purchase = await updatePurchase(req.params.id, req.body)
        res.status(200).json(purchase)
    } catch (error) {
        res.status(500).json({error})
    }
})

purchasesRouter.get('', async(req, res) => {
    try {
        const purchases = await getAllPurchases()
        res.status(200).json(purchases)
    } catch (error) {
        res.status(500).json({error})
    }
})

export default purchasesRouter;
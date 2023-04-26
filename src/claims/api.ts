import { Router } from 'express'
import { backfill } from '../backfill/backfill';
import { createClaim, CreateClaim, deleteClaim, findClaim, getAllClaims, getClientClaims, updateClaim } from './functions';

const claimsRouter = Router();

claimsRouter.get('/backfill', async(req, res) => {
    try {
        const backfillData: any[] = await backfill('./src/reguard-challenge-data/claims.csv')
        backfillData.forEach(async(claim: any) => {
            const requestClaim: CreateClaim = {
                id: claim.id,
                status: claim.status,
                solution: claim.solution,
                createdAt: claim.createdAt,
                updatedAt: claim.updatedAt,
                customerId: claim.customerId,
                productPurchaseId: claim.productPurchaseId,
                productCondition: claim.productCondition,
                damageDescription: claim.damageDescription,
                damageDate: claim.damageDate,
            }

            await createClaim(requestClaim)
        })
        res.sendStatus(200)
    } catch (error) {
        res.status(500).json({error})
    }
})

claimsRouter.get('/:id', async(req, res) => {
    try {
        const claim = await findClaim(req.params.id)
        res.status(200).json(claim)
    } catch (error) {
        res.status(500).json({error})
    }
})

claimsRouter.delete('/:id', async(req, res) => {
    try {
        await deleteClaim(req.params.id)
        res.sendStatus(200)
    } catch (error) {
        res.status(500).json({error})
    }
})

claimsRouter.patch('/:id', async(req, res) => {
    try {
        const claim = await updateClaim(req.params.id, req.body)
        res.status(200).json(claim)
    } catch (error) {
        res.status(500).json({error})
    }
})

claimsRouter.get('', async(req, res) => {
    try {
        const claims = await getAllClaims()
        res.status(200).json(claims)
    } catch (error) {
        res.status(500).json({error})
    }
})

claimsRouter.get('/user/:id', async(req, res) => {
    try {
        const claims = await getClientClaims(req.params.id)
        res.status(200).json(claims)
    } catch (error) {
        throw error
    }
})


export default claimsRouter;

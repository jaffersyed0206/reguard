import { Router } from 'express'
import { backfill } from '../backfill/backfill';
import { createCustomer, deleteCustomer, findCustomer, updateCustomer } from './functions';

const customerRouters = Router();

customerRouters.get('/backfill', async(req, res) => {
    try {   
        const backfillData: any[] = await backfill('./src/reguard-challenge-data/customers.csv') 
        backfillData.forEach(async(customer: any) => {
            const requestCustomer = {
                id: customer.id,
                firstName: customer.firstName,
                lastName: customer.lastName,
                createdAt: customer.createdAt,
                updatedAt: customer.updatedAt,
            }
            await createCustomer(requestCustomer)
        })

        res.sendStatus(200)
    } catch (error) {
        res.status(500).json({error})
    }
})

customerRouters.get('/:id', async(req, res) => {
    try {
        const customer = await findCustomer(req.params.id)
        res.status(200).json(customer)
    } catch (error) {
        res.status(500).json({error})
    }
})

customerRouters.delete('/:id', async(req, res) => {
    try {
        await deleteCustomer(req.params.id)
        res.sendStatus(200)
    } catch (error) {
        res.status(500).json({error})
    }
})

customerRouters.patch('/:id', async(req, res) => {
    try {
        const customer = await updateCustomer(req.params.id, req.body)
        res.status(200).json(customer)
    } catch (error) {
        res.status(500).json({error})
    }
})

export default customerRouters;
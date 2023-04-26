import CustomersModel, { Customers } from "./model"

export type CreateCustomer = {
    id: string
    firstName: string
    lastName: string
    createdAt: string
    updatedAt: string
}

export const createCustomer = async (customer: CreateCustomer): Promise<Customers> => {
    try {
        const createdCustomer: CustomersModel = await CustomersModel.create(customer)
        return new Customers(
            createdCustomer.get().id,
            createdCustomer.get().firstName,
            createdCustomer.get().lastName,
            createdCustomer.get().createdAt,
            createdCustomer.get().updatedAt,
        )
    } catch (error) {
        // Logging Error
        throw error
    }
}

export const findCustomer = async (id: string): Promise<Customers> => {
    try {
        const foundCustomer: CustomersModel | null = await CustomersModel.findByPk(id)
        if (!foundCustomer) {
            throw new Error("Customer not found")
        }
        return new Customers(
            foundCustomer.get().id,
            foundCustomer.get().firstName,
            foundCustomer.get().lastName,
            foundCustomer.get().createdAt,
            foundCustomer.get().updatedAt,
        )
    } catch (error) {
        throw error
    }
}

export type UpdateCustomerRequest = {
    firstName?: string
    lastName?: string
}

export const updateCustomer = async (id: string, updateCustomerRequest: UpdateCustomerRequest): Promise<Customers> => {
    try {
        await CustomersModel.update(updateCustomerRequest, { where: { id } })
        return await findCustomer(id)
    } catch (error) {
        throw error
    }
}

export const deleteCustomer = async (id: string): Promise<void> => {
    try {
        await CustomersModel.destroy({ where: { id } })
    } catch (error) {
        throw error
    }
}

export const getAllCustomers = async (): Promise<Customers[]> => {
    try {
        const customers: CustomersModel[] = await CustomersModel.findAll()
        return customers.map((customer: CustomersModel) => {
            return new Customers(
                customer.get().id,
                customer.get().firstName,
                customer.get().lastName,
                customer.get().createdAt,
                customer.get().updatedAt,
            )
        })
    } catch (error) {
        throw error
    }
}
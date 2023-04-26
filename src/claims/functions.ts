import ClaimsModel, { Claims } from "./model"

export type CreateClaim = {
  id: string
  status: string
  solution: string
  createdAt: string
  updatedAt: string
  customerId: string
  productPurchaseId: string
  productCondition: string
  damageDescription: string
  damageDate: string
}

export const createClaim = async (claim: CreateClaim): Promise<Claims> => {
  try {
    const createdClaim: ClaimsModel = await ClaimsModel.create(claim)
    return new Claims(
      createdClaim.get().id,
      createdClaim.get().status,
      createdClaim.get().solution,
      createdClaim.get().createdAt,
      createdClaim.get().updatedAt,
      createdClaim.get().customerId,
      createdClaim.get().productPurchaseId,
      createdClaim.get().productCondition,
      createdClaim.get().damageDescription,
      createdClaim.get().damageDate,
    )
  } catch (error) {
    // Logging Error
    throw error
  }
}

export const findClaim = async (id: string): Promise<Claims> => {
  try {
    const foundClaim: ClaimsModel | null = await ClaimsModel.findByPk(id)
    if (!foundClaim) {
      throw new Error("Claim not found")
    }
    return new Claims(
      foundClaim.get().id,
      foundClaim.get().status,
      foundClaim.get().solution,
      foundClaim.get().createdAt,
      foundClaim.get().updatedAt,
      foundClaim.get().customerId,
      foundClaim.get().productPurchaseId,
      foundClaim.get().productCondition,
      foundClaim.get().damageDescription,
      foundClaim.get().damageDate,
    )
  } catch (error) {
    throw error
  }
}

export const getClientClaims = async (id: string): Promise<Claims[]> => {
  try {
    const foundClaims: ClaimsModel[] = await ClaimsModel.findAll({ where: { customerId: id } })
    return foundClaims.map((claim: ClaimsModel) => {
      return new Claims(
        claim.get().id,
        claim.get().status,
        claim.get().solution,
        claim.get().createdAt,
        claim.get().updatedAt,
        claim.get().customerId,
        claim.get().productPurchaseId,
        claim.get().productCondition,
        claim.get().damageDescription,
        claim.get().damageDate,
      )
    })
  } catch (error) {
    throw error
  }
}

export type UpdateClaimRequest = {
  status?: string
  solution?: string
  createdAt?: string
  updatedAt?: string
  customerId?: string
  productPurchaseId?: string
  productCondition?: string
}

export const updateClaim = async (id: string, claim: UpdateClaimRequest): Promise<Claims> => {
  try {
    await ClaimsModel.update(claim, { where: { id } })
    return await findClaim(id)
  } catch (error) {
    throw error;
  }
}

export const deleteClaim = async (id: string): Promise<void> => {
  try {
    await ClaimsModel.destroy({ where: { id } })
  } catch (error) {
    throw error
  }
}

export const getAllClaims = async (): Promise<Claims[]> => {
  try {
    const foundClaims: ClaimsModel[] = await ClaimsModel.findAll()
    return foundClaims.map((claim: ClaimsModel) => {
      return new Claims(
        claim.get().id,
        claim.get().status,
        claim.get().solution,
        claim.get().createdAt,
        claim.get().updatedAt,
        claim.get().customerId,
        claim.get().productPurchaseId,
        claim.get().productCondition,
        claim.get().damageDescription,
        claim.get().damageDate,
      )
    })
  } catch (error) {
    throw error
  }
}
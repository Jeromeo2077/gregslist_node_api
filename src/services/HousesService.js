import { dbContext } from "../db/DbContext.js"

class HousesService {

  async getHouses(request, response, next) {
    try {
      const houses = await dbContext.Houses.find()
      return houses
    } catch (error) {
      next(error)
    }
  }

}

export const housesService = new HousesService()
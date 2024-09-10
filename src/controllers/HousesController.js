import { housesService } from "../services/HousesService.js";
import BaseController from "../utils/BaseController.js";

export class HousesController extends BaseController {
  constructor() {
    super('/api/houses')
    this.router
      .get('', this.getHouses)
      .get('/:houseId', this.getHouseById)
  }

  async getHouses(request, response, next) {
    try {
      const houses = await housesService.getHouses()
      response.send(houses)
    } catch (error) {
      next(error()
      )
    }
  }

  async getHouseById(request, response, next) {
    try {
      const houseId = request.params.houseId
      const house = await housesService.getHouseById(houseId)
      response.send(house)
    } catch (error) {
      next(error)
    }
  }
}
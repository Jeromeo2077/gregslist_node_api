import { housesService } from "../services/HousesService.js";
import BaseController from "../utils/BaseController.js";

export class HousesController extends BaseController {
  constructor() {
    super('/api/houses')
    this.router
      .get('', this.getHouses)
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
}
import DelivereManagement from '../models/DelivereManagement';

class DelivereController {
  async index(req, res) {
    const response = await DelivereManagement.findAll();
    return res.json(response);
  }
}

export default new DelivereController();

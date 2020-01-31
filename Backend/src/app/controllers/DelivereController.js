import OrderManagement from '../models/OrderManagement';

class DelivereController {
  async index(req, res) {
    const response = await OrderManagement.findAll({
      where: { deliveryman_id: req.params.id },
    });

    ///Esse funcionalidade deve retornar as encomendas atribuidas à ele, que não estejam entregues ou canceladas;
    return res.json(response);
  }
}

export default new DelivereController();

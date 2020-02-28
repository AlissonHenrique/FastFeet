import OrderManagement from '../models/OrderManagement';
import DelivereManagement from '../models/DelivereManagement';

class DelivereController {
  async store(req, res) {
    const { id } = req.body

    const delivere = await DelivereManagement.findOne({
      where: { id },
    });

    if (!delivere) {
      return res.status(401).json({ error: 'User not found' });
    }
    return res.json(delivere)
  }

  async index(req, res) {
    const response = await OrderManagement.findAll({
      where: { deliveryman_id: req.params.id },
      // where: { deliveryman_id: req.params.id,end_date:null,canceled_at:true},
    });

    // const response = await OrderManagement.findAll({
    //   where: { end_date: true,},
    // });
    // Permita também que ele liste apenas as encomendas que já foram entregues por ele, com base em seu ID de cadastro;
    return res.json(response);
  }
}

export default new DelivereController();

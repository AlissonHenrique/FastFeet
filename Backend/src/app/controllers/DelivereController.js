import Delivere from '../models/Delivere';

class DelivereController {
  async index(req, res) {
    const response = await Delivere.findAll();
    return res.json(response);
  }

  async store(req, res) {
    const response = await Delivere.create(req.body);
    return res.json(response);
  }

  async update(req, res) {
    const response = await Delivere.update(req.body);
    return res.json(response);
  }

  async delete(req, res) {
    await Delivere.destroy({ where: { id: req.params.id } });
    return res.json({ msg: `id deletado com sucesso ` });
  }
}

export default new DelivereController();

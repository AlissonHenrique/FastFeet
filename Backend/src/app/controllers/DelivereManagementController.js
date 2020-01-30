import DelivereManagement from '../models/DelivereManagement';

class DelivereManagementController {
  async index(req, res) {
    const response = await DelivereManagement.findAll();
    return res.json(response);
  }

  async store(req, res) {
    const response = await DelivereManagement.create(req.body);
    return res.json(response);
  }

  async update(req, res) {
    const response = await DelivereManagement.update(req.body);
    return res.json(response);
  }

  async delete(req, res) {
    await DelivereManagement.destroy({ where: { id: req.params.id } });
    return res.json({ msg: `id deletado com sucesso ` });
  }
}

export default new DelivereManagementController();

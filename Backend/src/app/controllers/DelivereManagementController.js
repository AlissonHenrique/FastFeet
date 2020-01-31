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
    const response = await DelivereManagement.findByPk(req.params.id);
    const up = await response.update(req.body);
    return res.json(up);
  }

  async delete(req, res) {
    await DelivereManagement.destroy({ where: { id: req.params.id } });
    return res.json({ msg: `Deletado com sucesso ` });
  }
}

export default new DelivereManagementController();

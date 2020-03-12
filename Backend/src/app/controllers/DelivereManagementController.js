import DelivereManagement from '../models/DelivereManagement';

class DelivereManagementController {
  async index(req, res) {
    const response = await DelivereManagement.findByPk(req.params.id);
    if (response) {
      return res.json(response);
    }
    const response2 = await DelivereManagement.findAll();
    return res.json(response2);
  }

  async store(req, res) {
    const { filename: avatar_id } = req.file;
    const { name, email } = req.body;
    const response = await DelivereManagement.create({
      avatar_id,
      name,
      email,
    });
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

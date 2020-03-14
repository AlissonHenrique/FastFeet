import DelivereManagement from '../models/DelivereManagement';
import { Op } from 'sequelize';
class DelivereManagementController {
  async index(req, res) {
    const { q: recipientName, page = 1 } = req.query;

    const response = await DelivereManagement.findByPk(req.params.id);
    if (response) {
      return res.json(response);
    }

    const response2 = await DelivereManagement.findAll({
      attributes: ['id', 'name', 'email', 'avatar_id'],
      limit: 5,
      offset: (page - 1) * 5,
    });
    if (response2) {
      return res.json(response2);
    }

    const responseName = await DelivereManagement.findAll({
      where: {
        name: {
          [Op.iLike]: `${recipientName}`,
        },
      },
      attributes: ['id', 'name', 'email', 'avatar_id'],
    });

    if (responseName) {
      return res.json(responseName);
    }
  }

  async store(req, res) {
    const { filename: avatar_id } = req.file;
    const { name, email } = req.body;
    const response = await DelivereManagement.create({
      avatar_id,
      name,
      email,
    });

    return res.json(req.file);
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

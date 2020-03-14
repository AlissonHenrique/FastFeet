import * as Yup from 'yup';
import Recipient from '../models/Recipient';
import { Op } from 'sequelize';
class RecipientControler {
  async index(req, res) {
    const { q: recipientName, page = 1 } = req.query;

    const response = await Recipient.findByPk(req.params.id);
    if (response) {
      return res.json(response);
    }
    const response2 = await Recipient.findAll({
      attributes: [
        'id',
        'nome',
        'rua',
        'numero',
        'complemento',
        'estado',
        'cidade',
        'cep',
      ],
      limit: 5,
      offset: (page - 1) * 5,
    });
    if (response2) {
      return res.json(response2);
    }
    const responseName = await Recipient.findAll({
      where: {
        nome: {
          [Op.iLike]: `${recipientName}`,
        },
      },
      attributes: [
        'id',
        'nome',
        'rua',
        'numero',
        'complemento',
        'estado',
        'cidade',
        'cep',
      ],
    });

    if (responseName) {
      return res.json(responseName);
    }
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      rua: Yup.string().required(),
      numero: Yup.number().required(),
      complemento: Yup.string().required(),
      estado: Yup.string().required(),
      cidade: Yup.string().required(),
      cep: Yup.number().required(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const recipient = await Recipient.create(req.body);

    return res.json(recipient);
  }

  async update(req, res) {
    const rs = await Recipient.findByPk(req.params.id);
    const response = await rs.update(req.body);
    return res.json(response);
  }

  async delete(req, res) {
    await Recipient.destroy({ where: { id: req.params.id } });
    return res.json({ msg: `id deletado com sucesso ` });
  }
}

export default new RecipientControler();

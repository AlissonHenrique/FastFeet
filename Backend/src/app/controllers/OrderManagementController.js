import { getHours } from 'date-fns';
import OrderManagement from '../models/OrderManagement';
import Recipient from '../models/Recipient';
import DelivereManagement from '../models/DelivereManagement';
import Mail from '../../mail/mail';
import { parseISO, format } from 'date-fns';
import { Op } from 'sequelize';
class OrderManagementController {
  async index(req, res) {
    const { q: recipientProduct } = req.query;
    const orderId = await OrderManagement.findByPk(req.params.id, {
      include: [
        {
          model: DelivereManagement,
          as: 'entregador',
          attributes: ['email', 'name', 'avatar_id', 'url'],
        },
        {
          model: Recipient,
          as: 'destinatario',
          attributes: ['nome', 'cidade', 'estado', 'rua', 'numero', 'cep'],
        },
      ],
    });

    if (orderId) return res.json(orderId);
    const responseProduct = await OrderManagement.findOne({
      where: {
        product: {
          [Op.iLike]: `${recipientProduct}`,
        },
      },
      attributes: ['id', 'product'],
    });

    if (responseProduct) {
      return res.json(responseProduct);
    }
    const response = await OrderManagement.findAll({
      attributes: [
        'id',
        'product',
        'recipient_id',
        'deliveryman_id',
        'signature_id',
        'product',
        'canceled_at',
        'start_date',
        'end_date',
      ],
      include: [
        {
          model: DelivereManagement,
          as: 'entregador',
          attributes: ['email', 'name', 'avatar_id', 'url'],
        },
        {
          model: Recipient,
          as: 'destinatario',
          attributes: ['nome', 'cidade', 'estado', 'rua', 'numero', 'cep'],
        },
      ],
    });
    if (response) {
      return res.json(response);
    }
  }

  async store(req, res) {
    const { product, start_date, end_date } = req.body;
    const get = getHours(parseISO(start_date));

    if (get < 8 || get > 24) {
      return res.status(400).json({ error: 'Horário não permitido' });
    }

    const response = await OrderManagement.findOne({
      where: { id: req.body.deliveryman_id },
      include: [
        {
          model: DelivereManagement,
          as: 'entregador',
          attributes: ['email', 'name'],
        },
      ],
    });

    const formatted = valor => {
      return format(valor, 'MM/dd/yyyy');
    };

    await Mail.sendMail(
      {
        to: response.entregador.email,
        subject: 'FastFeet',
        template: 'delivere',
        context: {
          product,
          dataInicial: formatted(parseISO(start_date)),
          dataFinal: formatted(parseISO(end_date)),
          name: response.entregador.name,
        },
      },
      err => {
        if (err) {
          res.status(400).send({ error: 'erro no email' });
        }
        return res.send();
      }
    );

    const resp = await OrderManagement.create(req.body);
    return res.json(resp);
  }
  async update(req, res) {
    const response = await OrderManagement.findByPk(req.params.id);
    const { start_date } = req.body;
    const get = getHours(parseISO(start_date));

    if (get < 8 || get > 18) {
      return res.status(400).json({ error: 'Horário não permitido' });
    }
    const up = await response.update(req.body);
    return res.json(up);
  }

  async delete(req, res) {
    await OrderManagement.destroy({ where: { id: req.params.id } });
    return res.json({ msg: `id deletado com sucesso ` });
  }
}

export default new OrderManagementController();

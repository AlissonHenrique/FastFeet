import { getHours } from 'date-fns';
import Order from '../models/Order';
import Mail from '../../mail/mail';
import { format, parseISO } from 'date-fns';

class OrderController {
  async index(req, res) {
    const response = await Order.findAll();
    return res.json(response);
  }

  async store(req, res) {
    const { product, start_date, end_date } = req.body;
    const get = getHours(new Date());

    if (get < 8 || get > 18) {
      return res.status(400).json({ error: 'Horário não permitido' });
    }

    // dispara email para o entregador

    const formatted = valor => {
      format(parseISO(valor), 'MM/dd/yyyy');
    };

    await Mail.sendMail(
      {
        to: 'teste@fastfat.com',
        subject: 'teste',
        template: 'delivere',
        context: {
          product,
          dataInicial: formatted(start_date),
          dataFinal: formatted(end_date),
        },
      },
      err => {
        if (err) {
          res.status(400).send({ error: 'erro no email' });
        }
        return res.send();
      }
    );
    console.log(start_date);
    //  const response = await Order.create(req.body);
    return res.json({ msg: 'ok' });
  }
  async update(req, res) {
    return res.json({ msg: 'ok' });
  }

  async delete(req, res) {
    await Order.destroy({ where: { id: req.params.id } });
    return res.json({ msg: `id deletado com sucesso ` });
  }
}

export default new OrderController();

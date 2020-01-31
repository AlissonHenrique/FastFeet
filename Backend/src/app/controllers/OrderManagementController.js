import { getHours } from 'date-fns';
import OrderManagement from '../models/OrderManagement';
import Mail from '../../mail/mail';
import { format, parseISO } from 'date-fns';

class OrderManagementController {
  async index(req, res) {
    const response = await OrderManagement.findAll();
    return res.json(response);
  }

  async store(req, res) {
    const { product, start_date, end_date } = req.body;
    const get = getHours(parseISO(start_date));

    if (get < 8 || get > 18) {
      return res.status(400).json({ error: 'Horário não permitido' });
    }
    const response = await OrderManagement.create(req.body);
    return res.json(response);
    // dispara email para o entregador
    // const formatted = valor => {
    //   format(parseISO(valor), 'MM/dd/yyyy');
    // };

    // await Mail.sendMail({
    //     to: 'teste@fastfat.com',
    //     subject: 'teste',
    //     template: 'delivere',
    //     context: {
    //       product,
    //       dataInicial: formatted(start_date),
    //       dataFinal: formatted(end_date),
    //     },
    //   },
    //   err => {
    //     if (err) {
    //       res.status(400).send({ error: 'erro no email' });
    //     }
    //     return res.send();
    //   }
    // );
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

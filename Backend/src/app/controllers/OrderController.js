import { parseISO, getHours } from 'date-fns';
import Order from '../models/Order';
import { utcToZonedTime } from 'date-fns-tz';

class OrderController {
  async store(req, res) {
    const { start_date } = req.body;

    const parsedDate = parseISO(new Date());
    //const reponse = await Order.create(req.body);

    const get = getHours('16:00:00');

    if (get <= 8) {
      return res.status.status(400).json({ error: 'Não pode cadastrar neste horario' });
    }
    return res.json(get);
  }
}

export default new OrderController();

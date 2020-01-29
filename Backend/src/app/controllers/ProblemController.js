import { getHours } from 'date-fns';
import Problem from '../models/Problem';

class ProblemController {
  async index(req, res) {
    const response = await Problem.findAll();
    return res.json(response);
  }

  async store(req, res) {}
  async update(req, res) {
    return res.json({ msg: 'ok' });
  }

  async delete(req, res) {
    await Problem.destroy({ where: { id: req.params.id } });
    return res.json({ msg: `id deletado com sucesso ` });
  }
}

export default new ProblemController();

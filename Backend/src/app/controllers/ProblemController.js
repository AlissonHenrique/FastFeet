import Problem from '../models/Problem';

class ProblemController {
  async store(req, res) {
    const response = await Problem.create(req.body);
    return res.json(response);
  }

  async update(req, res) {
    return res.json({ msg: 'ok' });
  }

  async delete(req, res) {
    await Problem.destroy({ where: { id: req.params.id } });
    return res.json({ msg: `id deletado com sucesso ` });
  }
}

export default new ProblemController();

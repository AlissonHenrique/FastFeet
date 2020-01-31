import DelivereProblem from '../models/DelivereProblem';

class ProblemController {
  async index(req, res) {
    const response = await DelivereProblem.findAll(req.body);
    return res.json(response);
  }
  async store(req, res) {
    const response = await DelivereProblem.create(req.body);
    return res.json(response);
  }
}

export default new ProblemController();

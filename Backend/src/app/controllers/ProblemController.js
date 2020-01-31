import Problem from '../models/Problem';

class ProblemController {
  async store(req, res) {
    const response = await Problem.create(req.body);
    return res.json(response);
  }
}

export default new ProblemController();

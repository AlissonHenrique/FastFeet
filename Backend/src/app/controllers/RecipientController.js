import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class RecipientControler {
  async index(req, res) {
    const response = await Recipient.findAll();
    return res.json(response);
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
    const recipienteExist = await Recipient.findOne({
      where: { nome: req.body.nome },
    });

    // if (!recipienteExist) {
    //   return res.status(400).json({ error: 'User already exists.' });
    // }
    const response = await recipienteExist.update(req.body);
    return res.json(response);
  }

  async delete(req, res) {
    await Recipient.destroy({ where: { id: req.params.id } });
    return res.json({ msg: `id deletado com sucesso ` });
  }
}

export default new RecipientControler();

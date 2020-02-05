import Recipient from '../models/Recipient';

import * as Error from '../util/Error';

class RecipientController {
  async store(req, res) {
    const { name } = req.body;
    const recipientExists = await Recipient.findOne({ where: { name } });
    if (recipientExists) {
      return Error.BadRequest(res, 'Destinatário já está cadastrado.');
    }

    const { id } = await Recipient.create(req.body);
    return res.json({ id, name });
  }

  async update(req, res) {
    const recipient = await Recipient.findByPk(req.body.id);
    if (!recipient) {
      return Error.BadRequest(res, 'Destinatário não está cadastrado.');
    }

    const { id, name } = await recipient.update(req.body);

    return res.json({ id, name });
  }
}

export default new RecipientController();

import User from '../models/User';
import BadRequest from '../util/BadRequest';

class UserController {
  async store(req, res) {
    const userExists = User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return BadRequest(res, 'usuario já existe!');
    }

    const { id, name, email } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
    });
  }
}

export default new UserController();

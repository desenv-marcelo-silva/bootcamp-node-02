import User from '../models/User';
import * as Error from '../util/Error';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return Error.BadRequest(res, 'usuario já existe!');
    }

    const { id, name, email } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
    });
  }

  async update(req, res) {
    const { email, oldPassword } = req.body;
    const user = await User.findByPk(req.userId);

    if (email && email !== user.email) {
      const userExists = await User.findOne({ where: { email } });
      if (!userExists) {
        return Error.BadRequest(res, 'Usuário não existe.');
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return Error.Unauthorized(res, 'Password não confere.');
    }

    const { id, name } = await user.update(req.body);
    return res.json({
      id,
      name,
      email,
    });
  }
}

export default new UserController();

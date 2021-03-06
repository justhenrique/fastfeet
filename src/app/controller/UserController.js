import User from '../models/User';

class UserController {
  
  //STORE Function - CREATE A NEW USER
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email }});

    if (userExists) {
      return res.status(400).json({error: "Usuário já cadastrado no sistema"});
    }

    const { id, name, email, provider } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
      provider
    });
  }
  
  async update(req, res) {
    return res.json({ok: true});
  }
}

export default new UserController();
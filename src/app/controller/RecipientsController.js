import Recipients from '../models/Recipients';
import adminUser from './SessionsController';


class RecipientsController {

  async store( req, res) {
    
    if (!adminUser){
      return res.status(400).json({error: "Usuário não tem permissão para adicionar novos destinatários "});
    }
    
    const { id, name, street, complement, state, city, zip_code} = await Recipients.create(req.body);

    return res.json({
      id,
      name,
      street,
      complement,
      state,
      city,
      zip_code
    });
  }
  
  async update(req, res) {
    return res.json({ok: true});
  }

}

export default new RecipientsController();
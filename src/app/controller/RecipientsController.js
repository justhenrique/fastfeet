import Recipients from '../models/Recipients';
import adminUser from './SessionsController';


class RecipientsController {

  async store( req, res) {
    
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
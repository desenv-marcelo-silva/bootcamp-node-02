import Recipient from '../models/Recipient';

class Recipient {

    async store(req, res){
        const recipientExists = Recipient.findOne({ where: { }})
    }
}

export default new Recipient();
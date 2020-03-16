import pipedrive from '../utils/PipedriveUtils';
import DealDAO from '../dao/DealDAO';

class PedidoController {
  async store(req, res) {
    const deals = await pipedrive.findWonDeals();

    const createdDeals = await DealDAO.saveDeal(deals.data);
    if (createdDeals.length === 0) return res.status(204).json();

    return res.status(201).json(createdDeals);
  }
}

export default new PedidoController();

import pipedrive from '../utils/PipedriveUtils';

class DealController {
  async index(req, res) {
    const deals = await pipedrive.findWonDeals();

    return res.json(deals);
  }
}

export default new DealController();

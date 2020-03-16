import Deal from '../schemas/Deal';

class DealController {
  async index(req, res) {
    const deals = await Deal.aggregate([
      {
        $group: {
          _id: {
            date: '$won_date',
          },
          totalValue: { $sum: '$value' },
        },
      },
    ]);

    return res.json(deals);
  }
}

export default new DealController();

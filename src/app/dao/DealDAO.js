import Deal from '../schemas/Deal';

class DealDAO {
  async saveDeal(deals) {
    const savedDeals = [];

    // eslint-disable-next-line no-restricted-syntax
    for (const deal of deals) {
      deal.originalId = deal.id;
      // eslint-disable-next-line no-await-in-loop
      const dealExistent = await Deal.find({
        originalId: deal.originalId,
      });

      if (dealExistent.length === 0) {
        // seta Id original para não repetir inserções

        // eslint-disable-next-line no-await-in-loop
        await Deal.create(deal);
        savedDeals.push(deal);
      }
    }

    return savedDeals;
  }
}

export default new DealDAO();

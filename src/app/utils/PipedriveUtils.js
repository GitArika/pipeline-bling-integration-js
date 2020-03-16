import * as pipedrive from 'pipedrive';

class PipedriveUtils {
  constructor() {
    pipedrive.Configuration.apiToken = process.env.API_SECRET_PIPELINE;
  }

  async findWonDeals() {
    const deals = await pipedrive.DealsController.getAllDeals({
      userId: process.env.API_USER_PIPELINE,
      status: 'won',
    });

    return deals;
  }
}

export default new PipedriveUtils();

import * as mongoose from 'mongoose';
import moment from 'moment';

const DealSchema = new mongoose.Schema(
  {
    won_date: {
      type: String,
    },
    original_id: {
      type: Number,
    },
  },
  { strict: false, timestamps: true }
);

// eslint-disable-next-line func-names
DealSchema.pre('save', function(next) {
  this.won_date = moment(this.won_time).format('YYYY-MM-DD');

  next();
});

export default mongoose.model('Deal', DealSchema);

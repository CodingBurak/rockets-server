
import * as mongoose from 'mongoose';

const RocketSchema = new mongoose.Schema({
  name: {
    type: String
  },
  color: {
    type: Number
  },
  secondColor: {
    type: Number
  },
  speed: {
    type: Number
  },
  size: {
    type: Number
  }
  
});

export const Rocket =  mongoose.model('Rocket', RocketSchema);
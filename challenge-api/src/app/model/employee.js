import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  participation: { type: Number, required: true },
});

export default mongoose.model('Employee', employeeSchema);

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  name: { type: String, required: 'employee.name is required' },
  lastname: { type: String, required: 'employee.lastname is required' },
  participation: { type: Number, required: 'employee.participation is required' },
});

export default mongoose.model('Employee', employeeSchema);

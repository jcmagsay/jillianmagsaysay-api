import mongoose, { Schema } from 'mongoose';

// Define about schema
var aboutSchema = new Schema({
  title: String,
  supportingText: String,
});

// Export Mongoose model
export default mongoose.model('about', aboutSchema);

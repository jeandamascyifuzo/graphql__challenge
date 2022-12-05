import mongoose from "mongoose";

const NationSchema = new mongoose.Schema({
  country: String,
  year: Number,
  area: Number,
  totalPopulation: Number,
});
const Nations = mongoose.model("Nation", NationSchema);
export default Nations

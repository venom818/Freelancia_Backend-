import mongoose from 'mongoose';
const { Schema } = mongoose;

const conversationSchema = new Schema({
 id:{
    type:String,
    required: true,
    unique: true,  // Ensure conversationnames are unique
 },
 sellerId:{
    type:String,
    required: true, 
 },
 buyerId:{
type: String,
required: true,
 },
 readBySeller:{
   type: Boolean,
   required: true,
 },
 lastMessage:{
   type: String,
   required: true,
 },

}, {timestamps:true

});
export default mongoose.model("conversation", conversationSchema);
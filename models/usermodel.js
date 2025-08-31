import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
 username:{
    type:String,
    required: true,
    unique: true,  // Ensure usernames are unique
 },
 email:{
    type:String,
    required: true,
    unique: true,  // Ensure emails are unique
 },
 password:{
    type:String,
    required: true,
 },
 img:{
  type:String,
  required:false
 },
 phone:{
    type:String,
    required:false
 },
 country:{
    type:String,
    required:false
 },
 desc: {
    type:String,
    required:false,
 },
 isSeller:{
    type:Boolean,
    default:false
 },
}, {timestamps:true

});
export default mongoose.model("User", userSchema);
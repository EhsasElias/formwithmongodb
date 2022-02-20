const mongoose = require('mongoose');
const schema = mongoose.Schema;
const s_schema = new Schema({
    name:{type:String,required:true},
    age:{type:Number,require:true},
    city:{type:String,required:true}
});
student = mongoose.model("students",s_schema);
module.exports = student;
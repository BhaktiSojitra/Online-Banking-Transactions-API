const mongoose=require('mongoose');
const schema=mongoose.Schema({
    Name:String,
    Image:String,
    TransactionID:Number,
    AccountID:Number,
    TransactionType:String,
    Amount:Number,
    Date:String,
});

module.exports=mongoose.model("Transaction",schema);
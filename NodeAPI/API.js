const express=require('express');
const mongoose=require('mongoose');
const cors=require("cors")
const bodyParser=require('body-parser');
const Banking_Transactions=require('./Banking_Transactions');

mongoose.connect("mongodb://localhost:27017/Banking_Transactions").then(()=>{
    console.log("connection established successfully");
    const app=express();
    app.use(cors());
    app.use(bodyParser.urlencoded());
    app.use(express.json());

    app.get("/getall",async(req,res)=>{
        const data=await Banking_Transactions.find();
        res.json(data);
    });

    app.get("/getbyid/:id",async(req,res)=>{
        const result=await Banking_Transactions.findOne({TransactionID:req.params.id});
        res.json(result);
    });

    app.post("/insert",async(req,res)=>{
        const{Name,Image,TransactionID,AccountID,TransactionType,Amount,Date}=req.body;
        const banking_transactions=Banking_Transactions();
        banking_transactions.Name=Name;
        banking_transactions.Image=Image;
        banking_transactions.TransactionID=TransactionID;
        banking_transactions.AccountID=AccountID;
        banking_transactions.TransactionType=TransactionType;
        banking_transactions.Amount=Amount;
        banking_transactions.Date=Date;
        const result=await banking_transactions.save();
        res.json(result);
    });

    app.put("/update/:id",async(req,res)=>{
        const result=await Banking_Transactions.findOne({TransactionID:req.params.id});
        const{TransactionType,Amount,Date}=req.body;
        result.TransactionType=TransactionType;
        result.Amount=Amount;
        result.Date=Date;
        result.save();
        res.json(result);
    });

    app.delete("/delete/:id",async(req,res)=>{
        const result=await Banking_Transactions.deleteOne({TransactionID:req.params.id});
        res.json(result);
    });

    app.listen(3003,()=>{
        console.log("server started...");
    });
});
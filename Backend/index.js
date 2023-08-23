require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors");
app.use(express.json())
app.use(cors());

// DB connection
// console.log(process.env.DB_API_KEY)
// const db = "mongodb+srv://chideracalistus:economic00@cluster0.aryyobw.mongodb.net/test?retryWrites=true"
mongoose
    .connect("mongodb+srv://chideracalistus:economic00@cluster0.aryyobw.mongodb.net/test?retryWrites=true")
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));


// Schema
const sch = {
    number:String,
    location:String,
    packages:String,
    address:String,
    checkpoint1:String,
    checkpoint2:String,
    checkpoint3:String,
    arrival:String,
    weight:String,
    shipmentMethod:String,
    carrierReferenceNo:String,
    product:String,
    qty:String,
    paymentMethod:String,
    expectedDeliveryDate:String

}

const monmodel = mongoose.model("NEWCOL",sch)

app.get("/search/:key", async (req,res)=>{
    console.log(req.params.key)
    let dataDB = await monmodel.find(
        {
            "$or":[
                {"number":{$regex:req.params.key}}
            ]
        }
    )
    res.send(dataDB)
})

// POST
app.post("/post",async(req,res)=>{
    console.log("inside post function")

    const data = new monmodel({
        number:req.body.number,
        location:req.body.location,
        address:req.body.address,
        checkpoint1:req.body.checkpoint1,
        checkpoint2:req.body.checkpoint2,
        checkpoint3:req.body.checkpoint3,
        arrival:req.body.arrival,
        weight:req.body.weight,
    shipmentMethod:req.body.shipmentMethod,
    carrierReferenceNo:req.body.carrierReferenceNo,
    product:req.body.product,
    qty:req.body.qty,
    paymentMethod:req.body.paymentMethod,
    expectedDeliveryDate:req.body.expectedDeliveryDate,
    package:req.body.packages
    })

    const val = await data.save()
    res.send("posted")
})

app.listen(3000,()=>{
    console.log("on port 3000")
})


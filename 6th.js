const {MongoClient}=require('mongodb');
const uri='mongodb://127.0.0.1/27017';
const client=new MongoClient(uri);

async function run(){
    try{
        client.connect();
        console.log("Connected...");
        const db=client.db("BRECW3");
        const dept=db.collection("dept");
        await dept.insertOne({name:"CSE", HOD:"Seshu bhavani", age:90});
        console.log(await dept.find().toArray());
        await dept.insertMany([
            {name:"ECE", HOD:"khjn", age:20},
            {name:"EEE", HOD:"sdtgyhj",age:54}
        ]);
        console.log(await dept.find().toArray());
        updated=await dept.updateOne({name:"CSE"},{$set:{HOD:'Praharsha'}});
        console.log(await dept.find().toArray());
        deleted=await dept.deleteOne({name:"EEE"});
        console.log(await dept.find().toArray());

        count= await dept.countDocuments();
        console.log(count);

        limit=await dept.find().limit(1).toArray();
        console.log('limit:',limit);

        sort=await dept.find().sort({age:-1}).toArray();
        console.log('sort:',sort);

        skip=await dept.find().skip(1).toArray();
        console.log('skip:',skip);


    }finally{
        client.close();
        console.log("Done");
    }

}
run();
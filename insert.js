const dbConnect = require('./mongodb');

const insert = async () =>{
    const db = await dbConnect();
    const result = await db.insertMany(
        [
            {name:"note k20",brand:"redmi",price:235,category:"mobile"},
            {name:"note k20 pro",brand:"redmi",price:255,category:"mobile"},
            {name:"m10",brand:"samsung",price:215,category:"mobile"}
        ]
    )
    if(result.acknowledged){
        console.warn("data inserted successfully");
    }
    else{
        console.warn("somthing went wrong");
    }
}

insert();
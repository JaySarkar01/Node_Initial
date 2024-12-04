const { name } = require('ejs');
const dbConnect = require('./mongodb');

const update = async () => {
    let data = await dbConnect();
    let result = await data.updateOne(
        {name: 'note k11'},{
            $set:{name:'note k12',price:220}
        }
    );
    console.warn(result);
}

update();
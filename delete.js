const { name } = require('ejs');
const dbConnect = require('./mongodb');

const deletData = async () => {
    let data = await dbConnect();
    let result = await data.deleteOne({name:'m40'});
    if(result.acknowledged){
        console.warn('data deleted');
    }
}
deletData();
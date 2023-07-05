const mongodb=require('mongodb');
const MongoClient=mongodb.MongoClient;

let database;

async function getDatabase(){
    const client = await MongoClient.connect('mongodb+srv://admin:vtdMwItMS0IS9ka6@cluster0.xlkjs3v.mongodb.net/');
    database=client.db('library');

    if(!database){
        console.log("Database is not Connected");
    }

    return database;
}
//mongodb://127.0.0.1:27017
module.exports={
    getDatabase
}
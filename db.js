const mongodb=require('mongodb');
const MongoClient=mongodb.MongoClient;

let database;

async function getDatabase(){
    const client = await MongoClient.connect('mongodb://127.0.0.1:27017');
    database=client.db('library');

    if(!database){
        console.log("Database is not Connected");
    }

    return database;
}

module.exports={
    getDatabase
}
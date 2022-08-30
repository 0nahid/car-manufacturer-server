function dbConnect() {
    // const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
    // const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zo2yn.mongodb.net/?retryWrites=true&w=majority`;
    // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    console.log('test db connected');
}
module.exports = dbConnect;
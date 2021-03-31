async function main() {
    const connectURL = "mongodb+srv://<username>:<password>@ict.8u6vp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const client = new MongoClient(connectURL);
    try{
        await client.connect();
        await listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
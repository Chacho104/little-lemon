import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.vyj35gr.mongodb.net/?retryWrites=true&w=majority`;
  const client = await MongoClient.connect(connectionString);
  return client;
}

export async function getAllDocuments(
  client,
  database,
  collection,
  sort,
  filter = {}
) {
  const db = client.db(database);

  const documents = await db
    .collection(collection)
    .find(filter)
    .sort(sort)
    .toArray();

  return documents;
}

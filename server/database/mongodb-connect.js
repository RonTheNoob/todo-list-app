import mongoose from "mongoose"

export default function connect() {
    const database ="mongodb+srv://raborromeojr:F7LhfRea3kL5ppwG@todocluster.od8af.mongodb.net/?retryWrites=true&w=majority&appName=TodoCluster";
    mongoose
        .connect(database, {
            dbName: "todos"
        })
        .then(() => {
            console.log("Connected to the database");
        })
        .catch((error) => {
            console.error(error);
        });
    }
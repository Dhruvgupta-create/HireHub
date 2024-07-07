import mongoose from "mongoose";

export const dbConnection = async() => {
 
 await mongoose
    .connect(process.env.MONGO_URI,{
      dbName:"HireHub"
    })
    .then(() => {
      console.log("Connected to database.");
    })
    .catch((err) => {
      console.log(`Some Error occured. ${err}`);
    });
};

//to check if it's working
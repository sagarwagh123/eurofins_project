let personArr=[];
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://sagarswagh:waghwagh@cluster0.chiru.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
  try {
    
    async function run() {

      try {
  
        const database = client.db('HappyTrip');
  
        const passengerInfo = database.collection('Flights');
  
  
  
        const person = await passengerInfo.findOne({arrivalTime:"18:00"});
        personArr.push(person);
  
        console.log(person);
        display();
       
  
      } finally {
  
        // Ensures that the client will close when you finish/error
  
        await client.close();
  
      }
  
    }
  
    run().catch(console.dir);

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

//homepage 127.0.0.1:3000

run().catch(console.dir);

// function display()
// {

//   document.getElementById("hi").innerHTML=personArr[0];
// }


const express = require('express')

// get request
getFlights(){
  return flights
}
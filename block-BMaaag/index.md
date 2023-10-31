writeCode

Write code to:-

- create a database named `mountains`
  //use mountains

- a collection inside that database named `himalayas`
  //db.createCollection('himalayas')

- insert 1 document into that collection `{name: 'Dhauldhar range', height: '4000 mtrs'}`
  //db.himalayas.insertOne({ name: "Dhauldhar range", height: "4000 mtrs" });

- insert multiple document using insertMany command
  //db.himalayas.insertMany([{ name: "Vindhya range", height: "4200 mtrs" },{ name: "Mount Everest", height: "8850 mtrs" },{ name: "K2 range", height: "8611 mtrs" }])

- find all documents from mountains
  //db.himalayas.find().pretty()

- find a single document using name
  //db.himalayas.find({name: "Vindhya range"})

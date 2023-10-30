writeCode

Write code to:-

- create a database named `sports`.
  //use sports
- list all databases present in local mongod server.
  //show dbs
- create 3 collections named `cricket`, `football`, `TT` in sports databse.
  //db.createCollection('cricket')
  //db.createCollection('football')
  //db.createCollection('TT')
- add multiple players in those collections which should have fields like `name`, `age` and `email` and `bid_price`.
  //db.cricket.insertMany([{"name" : "amit" , "age" : 12 , "email" : "amit12@gmail.com" , "bid_price":1200} , {"name" : "sumit" , "age" : 20 , "email" : "sumit12@gmail.com" , "bid_price":2200}])
  //db.football.insertMany([{"name" : "anand" , "age" : 23 , "email" : "anand2@gmail.com" , "bid_price":2200} , {"name" : "sudit" , "age" : 22 , "email" : "sudit02@gmail.com" , "bid_price":1000}])
  //db.cricket.insertMulty
- list all collections in sports database.
  //show collections
- rename `TT` collection to `tennis`.
  //db.TT.renameCollection('tennis')
- create a capped collection called `khokho` which should have max 3 documents.
  //db.createCollection('khokho' , {capped:true , size: 1024 , max:3})
  Try inserting more than 3 and see what happens?
  //db.khokho.insertMany([{"name" : "zoya"} , {"name" : "surya"} , {"name" : "ankita"}])
  //db.khokho.insertOne({'name' : "aarti"})
- check whether a collection is capped or not?
  //db.khokho.isCapped()
- drop all documents from `football` collection.
  //db.football.drop()
- delete cricket collection completely.
  //db.cricket.drop()
- delete sports database.
  //db.dropDatabase()
- check which database you are connected to ?
  //db

- connect to test database
  //use test

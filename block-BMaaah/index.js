db.articles.insertMany([
  {
    title: "Dog",

    details: "All about dogs!",
    author: { name: "Author1", email: "author1@gmail.com", age: 20 },
    tags: ["html", "css", "js", "mongo"],
  },
  {
    title: "Cats",

    details: "All about cats!",
    author: { name: "Author2", email: "author2@gmail.com", age: 10 },
    tags: ["html", "js", "mongo"],
  },
  {
    title: "Animals",

    details: "All about animals!",
    author: { name: "Author3", email: "author3@gmail.com", age: 19 },
    tags: ["html", "js", "mongo"],
  },
]);

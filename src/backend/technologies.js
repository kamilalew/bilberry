
let database = [
  {
    id: 1,
    name: "React.js",
    language: "JavaScript",
    description: "Front-end library powered by Facebook",
    initRelease: 2013,
  },
  {
    id: 2,
    name: "Angular",
    language: "JavaScript",
    description:
      "Angular is a platform for building mobile and desktop web applications.",
    initRelease: 2016,
  },
  {
    id: 3,
    name: "Node.js",
    language: "JavaScript",
    description:
      "Is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
    initRelease: 2009,
  },
];


module.exports = {
    getData: () => {
      return database
    },
  
    addData: (data) => {
      database.push(data)
    },
  
    deleteData: (id) => {
        const index = database.findIndex((item) => item.id == id);
  
        if (index !== -1) {
          database.splice(index, 1);
        }
    },
};
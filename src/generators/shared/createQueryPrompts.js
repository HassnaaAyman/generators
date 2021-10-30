const createPrompts = (defaulQueryName = "QueryName") => [
  {
    type: "confirm",
    name: "queries",
    message: "Do You wanna add queries to your project?",
    default: true,
  },
  {
    type: "input",
    name: "queryName",
    message: "What should it be called?",
    default: defaulQueryName,
  },
];

module.exports = createPrompts;
